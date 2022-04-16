import { createTheme, responsiveFontSizes } from '@mui/material'
import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'
import shadows from './shadows'
import zIndex from './zIndex'

const theme = createTheme({
  breakpoints,
  palette,
  shadows,
  typography,
  zIndex,
  direction: 'ltr',
  shape: {
    borderRadius: 4,
  },
})

export default responsiveFontSizes(theme)
