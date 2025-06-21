export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    globals: {
        'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.jest.json'
        }
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.svg)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '\\.svg\\?react$': '<rootDir>/__mocks__/svgMock.tsx',
        '\\.svg$': '<rootDir>/__mocks__/svgMock.tsx',
    },
};
