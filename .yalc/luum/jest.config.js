module.exports = {
  rootDir: `.`,
  testEnvironment: `node`,
  modulePathIgnorePatterns: [`dist`],
  moduleNameMapper: {
    "~/(.*)": `<rootDir>/src`,
  },
  testRegex: `test.(ts|js)$`,
  coverageDirectory: `./coverage/`,
  collectCoverage: true,
  coverageReporters: [`json`, `html`, `text`, `text-summary`],
  collectCoverageFrom: [`src/**/*.{js,ts}`, `tests/**/*.{js,ts}`],
}
