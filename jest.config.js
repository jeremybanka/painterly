module.exports = {
  rootDir: `.`,
  testEnvironment: `node`,
  modulePathIgnorePatterns: [`dist`],
  moduleNameMapper: {
    "~/(.*)": `<rootDir>/app`,
  },
  testRegex: `test.(ts|js)$`,
  coverageDirectory: `./coverage/`,
  collectCoverage: true,
  coverageReporters: [`json`, `html`, `text`, `text-summary`],
  collectCoverageFrom: [`app/**/*.{js,ts}`, `tests/**/*.{js,ts}`],
}
