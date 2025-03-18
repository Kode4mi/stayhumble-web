import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	verbose: true,
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
	},
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
	],
};

export default config;