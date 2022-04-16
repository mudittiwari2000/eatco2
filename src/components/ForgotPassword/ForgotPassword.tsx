import React from 'react'
import {
  StyledForgotPassword,
  StyledForgotPasswordCard,
  StyledForgotPasswordCardContent,
  StyledForgotPasswordCardHeader,
  StyledForgotPasswordNextButton,
} from './ForgotPassword.styled'
import { Box } from '@mui/material'
import { StyledBusinessFormFieldLabel } from '../BusinessForm/BusinessForm.styled'
import { UnderlinedInputField } from '../InputField/InputField'
import { useRouter } from 'next/router'
import { StyledVerificationCardSubHeader } from '../Verification/Verification.styled'

const ForgotPassword = () => {
  const router = useRouter()
  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/register/verification')
  }

  return (
    <StyledForgotPassword>
      <StyledForgotPasswordCard>
        <StyledForgotPasswordCardContent>
          <StyledForgotPasswordCardHeader>
            Forgot Password
          </StyledForgotPasswordCardHeader>
          <StyledVerificationCardSubHeader>
            You&apos;ll be receiving an activation code to reset your password
            on your email
          </StyledVerificationCardSubHeader>
          <Box component="form" onSubmit={handleFormSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Email<span>*</span>
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                type="email"
                placeholder="Your email"
              />
            </Box>

            <StyledForgotPasswordNextButton type="submit">
              SEND CODE
            </StyledForgotPasswordNextButton>
          </Box>
        </StyledForgotPasswordCardContent>
      </StyledForgotPasswordCard>
    </StyledForgotPassword>
  )
}
export default ForgotPassword
