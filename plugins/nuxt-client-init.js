import { version } from '~/package.json'
import { VUE_CONSOLE } from '@/utils'

export default () => {
  VUE_CONSOLE('version', version)
}
