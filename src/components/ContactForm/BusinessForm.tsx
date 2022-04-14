import React, { useState } from 'react'
import ContactIcon from '@app/assets/svg/BusinessIcon'
import {
  StyledContactForm,
  StyledContactFormCard,
  StyledContactFormStepsContainer,
  StyledContactFormStep,
  StyledContactFormLine,
  StyledContactFormStepIconContainer,
  StyledContactFormStepText,
  StyledContactFormStepsAddress,
  StyledContactFormStepAddressLabel,
  StyledContactFormStepAddressBox,
  StyledContactFormStepAddressInput,
} from './BusinessForm.styled'
import { ChevronRight, Done } from '@mui/icons-material'
import theme from '@app/theme'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import UserActiveIcon from '@app/assets/svg/UserActiveIcon'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -10,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const ContactForm = () => {
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

  return (
    <StyledContactForm>
      <StyledContactFormCard>
        <StyledContactFormStepsContainer>
          <StyledContactFormStep position="start">
            <StyledContactFormStepIconContainer inactive>
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
                <ContactIcon />
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
        <StyledContactFormStepAddressBox>
          <StyledContactFormStepsAddress>
            <StyledContactFormStepAddressLabel>
              ZIP Code
            </StyledContactFormStepAddressLabel>
            <StyledContactFormStepAddressInput
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
      </StyledContactFormCard>
    </StyledContactForm>
  )
}
export default ContactForm
