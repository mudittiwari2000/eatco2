import theme from '@app/theme'
import { rem } from 'polished'

const toRem = (pxVal: string) => rem(pxVal, theme.typography.fontSize)

export default toRem
