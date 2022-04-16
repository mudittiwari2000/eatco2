import { Box } from '@mui/material'
import React from 'react'
import {
  StyledInputFieldHelperText,
  StyledPinInputField,
  StyledPinInputForm,
  StyledPinInputFormContent,
} from './PinInput.styled'

export type Code = {
  code1: string
  code2: string
  code3: string
  code4: string
  code5: string
  code6: string
}

interface Props {
  codes: Code
  handleChange: (
    value: string,
    evt: React.ChangeEvent<HTMLInputElement>
  ) => void
  handleFocus: (evt: React.KeyboardEvent<HTMLInputElement>) => void
  success: boolean | null
}

const PinInput = (props: Props) => {
  console.log('success', props.success)

  return (
    <StyledPinInputForm success={props.success}>
      <StyledPinInputFormContent>
        <StyledPinInputField
          name="code1"
          type="text"
          autoComplete="off"
          value={props.codes.code1}
          onChange={(e) => props.handleChange('code1', e)}
          tabIndex={1}
          maxLength={1}
          onKeyUp={(e) => props.handleFocus(e)}
          success={props.success}
        />
        <StyledPinInputField
          name="code2"
          type="text"
          autoComplete="off"
          value={props.codes.code2}
          onChange={(e) => props.handleChange('code2', e)}
          tabIndex={2}
          maxLength={1}
          onKeyUp={(e) => props.handleFocus(e)}
          success={props.success}
        />
        <StyledPinInputField
          name="code3"
          type="text"
          autoComplete="off"
          value={props.codes.code3}
          onChange={(e) => props.handleChange('code3', e)}
          tabIndex={3}
          maxLength={1}
          onKeyUp={(e) => props.handleFocus(e)}
          success={props.success}
        />

        <Box display="flex" mx={1} color="primary">
          &#8212;
        </Box>

        <StyledPinInputField
          name="code4"
          type="text"
          autoComplete="off"
          value={props.codes.code4}
          onChange={(e) => props.handleChange('code4', e)}
          tabIndex={4}
          maxLength={1}
          onKeyUp={(e) => props.handleFocus(e)}
          success={props.success}
        />
        <StyledPinInputField
          name="code5"
          type="text"
          autoComplete="off"
          value={props.codes.code5}
          onChange={(e) => props.handleChange('code5', e)}
          tabIndex={5}
          maxLength={1}
          onKeyUp={(e) => props.handleFocus(e)}
          success={props.success}
        />
        <StyledPinInputField
          name="code6"
          type="text"
          autoComplete="off"
          value={props.codes.code6}
          onChange={(e) => props.handleChange('code6', e)}
          tabIndex={6}
          maxLength={1}
          onKeyUp={(e) => props.handleFocus(e)}
          success={props.success}
        />
      </StyledPinInputFormContent>
      {props.success === false && (
        <StyledInputFieldHelperText>
          Please enter correct code
        </StyledInputFieldHelperText>
      )}
    </StyledPinInputForm>
  )
}

export default PinInput
