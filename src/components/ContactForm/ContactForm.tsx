import React from 'react'
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
import { useStore } from '@app/store'
import { observer } from 'mobx-react-lite'
import AddressIcon from '@app/assets/svg/AddressIcon'

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
  const { registerStore } = useStore()
  const theme = useTheme()

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
                <AddressIcon />
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
                value={registerStore.streetName}
                onChange={(evt) =>
                  registerStore.setStreetName(evt.target.value)
                }
              />
            </Box>

            <StyledContactFormStepAddressBox>
              <StyledContactFormStepsAddress>
                <StyledContactFormStepAddressLabel>
                  ZIP Code
                </StyledContactFormStepAddressLabel>
                <StyledContactFormStepAddressInput
                  readOnly
                  type="text"
                  inputMode="numeric"
                  value={registerStore.zip}
                  onChange={(evt) => registerStore.setZip(evt.target.value)}
                />
              </StyledContactFormStepsAddress>
              <StyledContactFormStepsAddress border>
                <StyledContactFormStepAddressLabel>
                  City
                </StyledContactFormStepAddressLabel>
                <StyledContactFormStepAddressInput
                  readOnly
                  value={registerStore.city}
                  onChange={(evt) => registerStore.setCity(evt.target.value)}
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

export default observer(ContactForm)
