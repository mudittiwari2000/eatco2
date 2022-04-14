import * as React from 'react'
import { InputProps } from '@mui/material'
import {
  StyledContainedInputField,
  StyledUnderlinedInputField,
} from './InputField.styled'

const ContainedInputField = (props: InputProps) => {
  return <StyledContainedInputField {...props} />
}

const UnderlinedInputField = (props: InputProps) => {
  return <StyledUnderlinedInputField {...props} />
}

export { ContainedInputField, UnderlinedInputField }
