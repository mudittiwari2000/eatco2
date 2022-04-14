import { styled as muiStyled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import styled from '@emotion/styled'
import { rem } from 'polished'
import theme from '@app/theme'

export const CustomInput = muiStyled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 25,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #035D62',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Assistant',
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
      borderRadius: 25,
      borderColor: '#035D62',
      boxShadow: '0 0 0 0.1rem rgba(3, 93, 98, .25)',
    },
  },
}))

export const StyledSelectOptionContainer = styled.div`
  display: flex;
`

export const StyledSelectOptionIconContainer = styled.div`
  display: flex;
  margin-right: ${rem('15px')};
`

export const StyledSelectOptionText = styled.p`
  font-family: ${theme.typography.fontFamily};
  font-size: ${rem('16px')};
  line-height: ${rem('21px')};
  color: #13253d;
`
