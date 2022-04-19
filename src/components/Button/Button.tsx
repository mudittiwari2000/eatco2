import { toRem } from '@app/utils'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { lighten } from 'polished'
import theme from '../../theme'

const OutlinedButton = styled(Button)`
  border-radius: ${toRem('25px')};
  font-size: ${toRem('14px')};
  line-height: ${toRem('17px')};
  padding: ${toRem('12px')} ${toRem('16px')};
  color: ${theme.palette.primary.main};

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    box-shadow: none;
  }
`
OutlinedButton.defaultProps = { variant: 'outlined', color: 'primary' }

const ContainedButton = styled(Button)`
  border-radius: ${toRem('10px')};
  font-size: ${toRem('14px')};
  line-height: ${toRem('17px')};
  padding: ${toRem('12px')} ${toRem('16px')};
  color: ${theme.palette.common.white};
  box-shadow: none;

  &:hover {
    box-shadow: none;
    background: ${lighten(0.02, theme.palette.primary.main)};
  }
`
ContainedButton.defaultProps = { variant: 'contained', color: 'primary' }

export { OutlinedButton, ContainedButton }
