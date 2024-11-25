import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    rules: {
      'ts/no-explicit-any': 'error',
      'node/prefer-global/process': 'off',
    },
  },
  ...tailwind.configs['flat/recommended'],
)

