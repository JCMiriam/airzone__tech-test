/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
        jsx: true
        },
    },
    settings: {
        react: {
        version: 'detect',
        },
        'import/resolver': {
        typescript: {},
        },
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'import',
        'storybook'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:storybook/recommended',
        'prettier' // ⚠️ debe ir al final
    ],
    rules: {
        // Reglas personalizadas (puedes añadir más si lo deseas)
        'react/react-in-jsx-scope': 'off', // innecesario con React 17+
        'import/order': ['warn', {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always'
        }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
