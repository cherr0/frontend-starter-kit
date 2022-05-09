module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'sort-imports': 'off',
        'import/order': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': 'off',
        'prettier/prettier': 'warn',
    },
    plugins: ['simple-import-sort'],
};
