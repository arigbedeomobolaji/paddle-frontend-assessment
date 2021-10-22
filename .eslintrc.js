// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react', 'import', 'jsx-a11y'],
	rules: {
		'no-console': 'warn',
		'import/first': 'error',
		'react/prop-types': 0,
		'linebreak-style': 0,
	},
};
