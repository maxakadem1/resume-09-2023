import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
  // Use Next's native flat ESLint configs for React, hooks, and TypeScript.
  ...nextVitals,
  ...nextTypescript,
]

export default eslintConfig
