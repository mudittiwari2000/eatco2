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
import Link from 'next/link'

const BusinessForm = () => {
  const [country, setCountry] = React.useState('')
  const handleCountryChange = (evt: SelectChangeEvent<unknown>) => {
    const { value } = evt.target as HTMLSelectElement
    setCountry(value)
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
          <Box display="flex" flexDirection="column">
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
                <UnderlinedInputField placeholder="------" />
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
                <UnderlinedInputField placeholder="EatCO2" />
              </Box>
            )}
          </Box>
          <Link passHref href="/register/contact">
            <StyledBusinessFormContinueButton
              sx={{ marginTop: !!country ? '60px' : '290px' }}
            >
              CONTINUE
            </StyledBusinessFormContinueButton>
          </Link>
        </StyledBusinessFormCardContent>
      </StyledBusinessFormCard>
    </StyledBusinessForm>
  )
}
export default BusinessForm
