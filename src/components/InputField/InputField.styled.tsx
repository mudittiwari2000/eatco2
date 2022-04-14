import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

export const StyledContainedInputField = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#FFF',
    border: '1px solid #1DAF9E',
    fontSize: 20,
    lineHeight: 26,
    width: '100%',
    padding: '16px 22px',
    transition: theme.transitions.create(['border-color', 'background-color']),
    color: '#13253d',
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
    '&:focus': {
      backgroundColor: '#F7F7F7',
      borderColor: 'transparent',
    },
  },
}))

export const StyledUnderlinedInputField = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#FFF',
    border: '1px solid #1DAF9E',
    fontSize: 20,
    lineHeight: 26,
    width: '100%',
    padding: '16px 22px',
    transition: theme.transitions.create(['border-color', 'background-color']),
    color: '#13253d',
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
    '&:focus': {
      backgroundColor: '#F7F7F7',
      borderColor: 'transparent',
    },
  },
}))
