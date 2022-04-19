import React from 'react'
import {
  StyledPassword,
  StyledPasswordCard,
  StyledPasswordCardContent,
  StyledPasswordCardHeader,
  StyledPasswordNextButton,
} from './Password.styled'
import { Box, Checkbox, FormControlLabel } from '@mui/material'
import { StyledBusinessFormFieldLabel } from '../BusinessForm/BusinessForm.styled'
import { UnderlinedInputField } from '../InputField/InputField'
import { useRouter } from 'next/router'

const Password = () => {
  const router = useRouter()

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/dashboard')
  }

  return (
    <StyledPassword>
      <StyledPasswordCard>
        <StyledPasswordCardContent>
          <StyledPasswordCardHeader>Set Password</StyledPasswordCardHeader>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            onSubmit={handleFormSubmit}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Password*
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                inputProps={{ minLength: 8, maxLength: 20 }}
                type="password"
                placeholder="********"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Confirm Password*
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                inputProps={{ minLength: 8, maxLength: 20 }}
                type="password"
                placeholder="********"
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox sx={{ color: 'primary.light' }} defaultChecked />
              }
              label="Yes, I would like to receive the newsletter"
              sx={{
                color: 'primary.dark',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'primary.light',
                  }}
                  required
                />
              }
              label="I agree with the Terms and Conditions"
              sx={{
                color: 'primary.dark',
                mb: '60px',
              }}
            />
            <StyledPasswordNextButton type="submit">
              FINISH
            </StyledPasswordNextButton>
          </Box>
        </StyledPasswordCardContent>
      </StyledPasswordCard>
    </StyledPassword>
  )
}
export default Password
