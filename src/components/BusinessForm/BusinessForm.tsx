import React from 'react'
import BusinessIcon from '../../assets/svg/BusinessIcon'
import UserIcon from '@app/assets/svg/UserIcon'
import { Box, SelectChangeEvent } from '@mui/material'
import {
  StyledBusinessForm,
  StyledBusinessFormCard,
  StyledBusinessFormStepsContainer,
  StyledBusinessFormStep,
  StyledBusinessFormLine,
  StyledBusinessFormStepIconContainer,
  StyledBusinessFormStepText,
  StyledBusinessFormCardContent,
  StyledBusinessFormContinueButton,
  StyledBusinessFormFieldLabel,
} from './BusinessForm.styled'
import { ChevronRight } from '@mui/icons-material'
import theme from '@app/theme'
import { BusinessTypeSelect } from '../BusinessFormSelect'
import { CountrySelect } from '../BusinessFormSelect/BusinessFormSelect'
import { UnderlinedInputField } from '../InputField/InputField'
import { useRouter } from 'next/router'

const BusinessForm = () => {
  const router = useRouter()
  const [country, setCountry] = React.useState('')
  const handleCountryChange = (evt: SelectChangeEvent<unknown>) => {
    const { value } = evt.target as HTMLSelectElement
    setCountry(value)
  }

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/register/contact')
  }

  return (
    <StyledBusinessForm>
      <StyledBusinessFormCard>
        <StyledBusinessFormCardContent>
          <StyledBusinessFormStepsContainer>
            <StyledBusinessFormStep position="start">
              <StyledBusinessFormStepIconContainer>
                <BusinessIcon />
              </StyledBusinessFormStepIconContainer>
              <StyledBusinessFormStepText>Business</StyledBusinessFormStepText>
            </StyledBusinessFormStep>
            <StyledBusinessFormLine>
              <ChevronRight
                sx={{ color: theme.palette.common.white, fontSize: 40 }}
              />
            </StyledBusinessFormLine>
            <StyledBusinessFormStep>
              <StyledBusinessFormStepIconContainer inactive>
                <UserIcon />
              </StyledBusinessFormStepIconContainer>
              <StyledBusinessFormStepText inactive>
                Contact
              </StyledBusinessFormStepText>
            </StyledBusinessFormStep>
          </StyledBusinessFormStepsContainer>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Business Type*
              </StyledBusinessFormFieldLabel>
              <BusinessTypeSelect />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Country*
              </StyledBusinessFormFieldLabel>
              <CountrySelect
                required
                country={country}
                handleChange={handleCountryChange}
              />
            </Box>
            {!!country && (
              <Box
                display="flex"
                flexDirection="column"
                sx={{ marginBottom: '30px' }}
              >
                <StyledBusinessFormFieldLabel>
                  CVR*
                </StyledBusinessFormFieldLabel>
                <UnderlinedInputField
                  required
                  inputProps={{ minLength: 8 }}
                  placeholder="------"
                />
              </Box>
            )}
            {!!country && (
              <Box
                display="flex"
                flexDirection="column"
                sx={{ marginBottom: '30px' }}
              >
                <StyledBusinessFormFieldLabel>
                  Registered Business Name*
                </StyledBusinessFormFieldLabel>
                <UnderlinedInputField required placeholder="EatCO2" />
              </Box>
            )}
            <StyledBusinessFormContinueButton
              sx={{ marginTop: !!country ? '60px' : '290px' }}
              type="submit"
            >
              CONTINUE
            </StyledBusinessFormContinueButton>
          </Box>
        </StyledBusinessFormCardContent>
      </StyledBusinessFormCard>
    </StyledBusinessForm>
  )
}
export default BusinessForm
