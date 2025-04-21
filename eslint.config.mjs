import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import pluginVue from 'eslint-plugin-vue'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    plugins: {
      prettier,
    },
    rules: {
      // This runs Prettier as an ESLint rule
      'prettier/prettier': 'error',

      // Turn off rules that conflict with Prettier
      ...prettierConfig.rules,
    },
  },
  {
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // Vue Component Naming and Structure
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/match-component-file-name': [
        'error',
        {
          extensions: ['.vue'],
          shouldMatchCase: true,
        },
      ],
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits'] }],
      'vue/define-props-declaration': ['error', 'type-based'],

      // Vue Template Best Practices
      'vue/html-self-closing': ['error', { html: { void: 'always' } }],
      'vue/no-v-html': 'warn', // Security best practice
      'vue/no-use-v-if-with-v-for': ['error'],
      'vue/no-unused-vars': ['error'],
      'vue/require-explicit-emits': ['error'],
      'vue/v-on-event-hyphenation': ['error', 'always'],
      'vue/attributes-order': ['error', { alphabetical: false }],

      // Vue Script Best Practices
      'vue/no-unused-properties': ['error'],
      'vue/no-unused-refs': ['error'],
      'vue/require-default-prop': ['error'],
      'vue/require-prop-types': ['error'],
      'vue/order-in-components': ['error'],
      'vue/no-multiple-template-root': 'off', // Vue 3 supports multiple roots
      'vue/no-deprecated-destroyed-lifecycle': 'error',
      'vue/no-deprecated-filter': 'error',
      'vue/valid-v-slot': 'error',

      // Accessibility
      'vue/no-potential-component-option-typo': 'error',
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/no-template-target-blank': 'error', // Security improvement

      // General code quality
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      // Import organization
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },
])
