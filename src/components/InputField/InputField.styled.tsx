import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

export const StyledContainedInputField = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#F7F7F7',
    border: '1px solid #1DAF9E',
    borderColor: 'transparent',
    fontSize: 16,
    lineHeight: 20,
    width: '100%',
    padding: '12px 18px',
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
      backgroundColor: '#FFF',
      borderColor: theme.palette.primary.light,
    },
    '&::placeholder': {
      color: '#13253d',
      opacity: 1,
    },
  },
}))

export const StyledUnderlinedInputField = styled(InputBase)(({ theme }) => ({
  border: '1px solid #1DAF9E',
  borderWidth: 0,
  borderBottomWidth: '1px',
  backgroundColor: '#FFF',
  transition: theme.transitions.create([
    'border-radius',
    'border-color',
    'background-color',
  ]),
  '& .MuiInputBase-input': {
    borderRadius: 0,
    position: 'relative',
    fontSize: 16,
    lineHeight: 19,
    width: '100%',
    padding: '12px 16px',
    color: '#13253d',
    transition: theme.transitions.create([
      'border-radius',
      'border-color',
      'background-color',
    ]),
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
  },
  '&:focus-within': {
    backgroundColor: '#F7F7F7',
    borderColor: 'transparent',
    borderRadius: 10,
  },
}))
