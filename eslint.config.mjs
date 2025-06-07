import { readFileSync } from 'node:fs'
import antfu from '@antfu/eslint-config'

const autoImportConfig = getAutoImportConfig()

export default antfu({
  globals: {
    ...autoImportConfig.globals,
  },
})

function getAutoImportConfig() {
  return JSON.parse(readFileSync('./.eslintrc-auto-import.json', 'utf-8'))
}
