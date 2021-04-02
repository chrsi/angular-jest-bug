const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const jestConfig = {
  preset: 'jest-preset-angular',
  testMatch: ['**/(*.)+spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  reporters: ["default"],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  transformIgnorePatterns: [
    // needed because lodash-es uses js modules (import/export) that need to be transpiled by babel (inside jest)
    'node_modules\/(?!lodash-es/.*)'
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' })
};

module.exports = jestConfig;
