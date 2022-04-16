import { styled as muiStyled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import styled from '@emotion/styled'
import { rem } from 'polished'
import theme from '@app/theme'

export const CustomInput = muiStyled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #035D62',
    borderWidth: 0,
    borderBottomWidth: '1px',
    fontSize: 14,
    width: '100%',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color']),
    fontFamily: [
      'Assistant',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: '#035D62',
    '&:focus': {
      borderColor: '#035D62',
    },
  },
}))

export const StyledSelectOptionContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledSelectOptionIconContainer = styled.div`
  display: flex;
  margin-right: ${rem('15px')};
`

export const StyledSelectOptionText = styled('p', {
  shouldForwardProp: (prop) => prop !== 'disabled',
})<{ disabled?: boolean }>`
  font-family: ${theme.typography.fontFamily};
  font-size: ${rem('16px')};
  line-height: ${rem('21px')};
  color: ${(p) => (p.disabled ? theme.palette.grey[800] : '#13253d')};
`
