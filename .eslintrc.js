module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-redeclare': 'error',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off', // Next.js 不需要 import React
    // --------- ✅ JavaScript 基础规则 ---------
    'no-unused-vars': 'warn', // 声明了但未使用
    'no-console': ['warn', { allow: ['warn', 'error'] }], // 限制 console 使用
    'no-debugger': 'error', // 禁止 debugger
    'no-redeclare': 'error', // 禁止变量重复声明
    'no-empty': 'warn', // 不允许空代码块
    'no-var': 'error', // 禁止使用 var
    'prefer-const': 'warn', // 如果变量没有被重新赋值，建议使用 const

    // --------- ✅ TypeScript 专属规则 ---------
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn', // 尽量避免使用 any
    '@typescript-eslint/explicit-function-return-type': 'off', // 可省略返回类型
    '@typescript-eslint/ban-ts-comment': 'warn', // 避免使用 @ts-ignore
    '@typescript-eslint/no-non-null-assertion': 'warn', // 避免使用非空断言 !
    '@typescript-eslint/no-inferrable-types': 'off', // 可允许类型自动推断
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'], // 推荐使用 interface

    // --------- ✅ React JSX 相关 ---------
    'react/react-in-jsx-scope': 'off', // Next.js 不需要 import React
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off', // 使用 TS，不需要 prop-types
    'react/jsx-key': 'error', // map 渲染 JSX 必须有 key
    'react/self-closing-comp': 'warn', // 无 children 的组件建议自闭合
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-unknown-property': 'error',

    // --------- ✅ React Hooks ---------
    'react-hooks/rules-of-hooks': 'error', // Hooks 必须在顶层使用
    'react-hooks/exhaustive-deps': 'warn', // useEffect 依赖必须写全

    // --------- ✅ Prettier 风格约束（自动修复 + 红线提示） ---------
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        endOfLine: 'lf'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
