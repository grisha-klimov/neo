import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      'node/prefer-global/process': 'off',
    },
  },
  ...tailwind.configs['flat/recommended'],
)
