import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { lighten, rem } from 'polished'
import theme from '../../theme'

const OutlinedButton = styled(Button)`
  border-radius: ${rem('25px')};
  font-size: ${rem('16px')};
  color: ${theme.palette.primary.main};
`
OutlinedButton.defaultProps = { variant: 'outlined', color: 'primary' }

const ContainedButton = styled(Button)`
  border-radius: ${rem('10px')};
  font-size: ${rem('16px')};
  color: ${theme.palette.common.white};

  &:hover {
    background: ${lighten(0.02, theme.palette.primary.main)};
  }
`
ContainedButton.defaultProps = { variant: 'contained', color: 'primary' }

export { OutlinedButton, ContainedButton }
