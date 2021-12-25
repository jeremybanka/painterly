import { useEffect } from "react"

import { atomFamily, useRecoilState } from "recoil"

import { IS_SERVER } from "~/utils/ssr"

const DARK_MODE_QUERY = `(prefers-color-scheme: dark)`

const queryStateFam = atomFamily<boolean, string>({
  key: `mediaQuery`,
  default: false,
})

export const useMediaQuery = (query: string): boolean => {
  if (IS_SERVER) return false

  const [doesMatch, setDoesMatch] = useRecoilState(queryStateFam(query))

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== doesMatch) setDoesMatch(media.matches)

    const listener = () => setDoesMatch(media.matches)

    media.addEventListener(`change`, listener)

    return () => media.removeEventListener(`change`, listener)
  }, [doesMatch])

  return doesMatch
}

export const useDarkMode = (): boolean => useMediaQuery(DARK_MODE_QUERY)
