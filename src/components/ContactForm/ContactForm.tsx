import React, { useState } from 'react'
import BusinessIcon from '@app/assets/svg/BusinessIcon'
import {
  StyledContactForm,
  StyledContactFormStepsContainer,
  StyledContactFormStep,
  StyledContactFormLine,
  StyledContactFormStepIconContainer,
  StyledContactFormStepText,
  StyledContactFormStepsAddress,
  StyledContactFormStepAddressLabel,
  StyledContactFormStepAddressBox,
  StyledContactFormStepAddressInput,
} from './ContactForm.styled'
import { ChevronRight, Done } from '@mui/icons-material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import UserActiveIcon from '@app/assets/svg/UserActiveIcon'
import {
  StyledBusinessFormCard,
  StyledBusinessFormCardContent,
  StyledBusinessFormContinueButton,
  StyledBusinessFormFieldLabel,
} from '../BusinessForm/BusinessForm.styled'
import { UnderlinedInputField } from '../InputField/InputField'
import { Box, InputAdornment, useTheme } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useRouter } from 'next/router'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -10,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const ContactForm = () => {
  const router = useRouter()
  const theme = useTheme()
  const [zipCode, setZipCode] = useState('12345')
  const [city, setCity] = useState('Copenhagen')

  const handleZipCodeField: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setZipCode(e.target.value)
  }

  const handleCityField: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setCity(e.target.value)
  }

  const handleBusinessIconClick = () => {
    router.push('/register/business')
  }

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/register/verification')
  }

  return (
    <StyledContactForm>
      <StyledBusinessFormCard>
        <StyledBusinessFormCardContent>
          <StyledContactFormStepsContainer>
            <StyledContactFormStep position="start">
              <StyledContactFormStepIconContainer
                inactive
                onClick={handleBusinessIconClick}
              >
                <StyledBadge
                  badgeContent={
                    <Done
                      sx={{
                        color: theme.palette.common.white,
                        fontSize: 10,
                      }}
                    />
                  }
                  color="primary"
                >
                  <BusinessIcon />
                </StyledBadge>
              </StyledContactFormStepIconContainer>
              <StyledContactFormStepText inactive>
                Business
              </StyledContactFormStepText>
            </StyledContactFormStep>
            <StyledContactFormLine>
              <ChevronRight
                sx={{
                  color: theme.palette.common.white,
                  fontSize: 40,
                  opacity: 0.4,
                }}
              />
            </StyledContactFormLine>
            <StyledContactFormStep>
              <StyledContactFormStepIconContainer>
                <UserActiveIcon />
              </StyledContactFormStepIconContainer>
              <StyledContactFormStepText>Address</StyledContactFormStepText>
            </StyledContactFormStep>
          </StyledContactFormStepsContainer>
          <Box component="form" onSubmit={handleFormSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Street Name
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                placeholder="type street name here ..."
                endAdornment={
                  <InputAdornment position="end">
                    <LocationOnIcon sx={{ mr: 1, color: '#959597' }} />
                  </InputAdornment>
                }
              />
            </Box>

            <StyledContactFormStepAddressBox>
              <StyledContactFormStepsAddress>
                <StyledContactFormStepAddressLabel>
                  ZIP Code
                </StyledContactFormStepAddressLabel>
                <StyledContactFormStepAddressInput
                  type="text"
                  inputMode="numeric"
                  value={zipCode}
                  onChange={handleZipCodeField}
                />
              </StyledContactFormStepsAddress>
              <StyledContactFormStepsAddress border>
                <StyledContactFormStepAddressLabel>
                  City
                </StyledContactFormStepAddressLabel>
                <StyledContactFormStepAddressInput
                  value={city}
                  onChange={handleCityField}
                />
              </StyledContactFormStepsAddress>
            </StyledContactFormStepAddressBox>
            <StyledBusinessFormContinueButton
              sx={{ marginTop: '120px' }}
              type="submit"
            >
              CONTINUE
            </StyledBusinessFormContinueButton>
          </Box>
        </StyledBusinessFormCardContent>
      </StyledBusinessFormCard>
    </StyledContactForm>
  )
}
export default ContactForm
