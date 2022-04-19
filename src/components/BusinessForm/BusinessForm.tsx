import React from 'react'
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
import type { BusinessType, Country } from '@app/store/registerStore'
import { useStore } from '@app/store'
import { observer } from 'mobx-react-lite'
import BusinessIconWhite from '@app/assets/svg/BusinessIconWhite'
import { toRem } from '@app/utils'

const BusinessForm = () => {
  const router = useRouter()
  const {
    registerStore: {
      country,
      setCountry,
      businessType,
      setBusinessType,
      cvr,
      setCvr,
      registeredBusinessName,
      setRegisteredBusinessName,
    },
  } = useStore()

  const handleBusinessTypeChange = (evt: SelectChangeEvent<unknown>) => {
    const { value } = evt.target as HTMLSelectElement
    setBusinessType(value as BusinessType)
  }

  const handleCountryChange = (evt: SelectChangeEvent<unknown>) => {
    const { value } = evt.target as HTMLSelectElement
    setCountry(value as Country)
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
                <BusinessIconWhite />
              </StyledBusinessFormStepIconContainer>
              <StyledBusinessFormStepText>Business</StyledBusinessFormStepText>
            </StyledBusinessFormStep>
            <StyledBusinessFormLine>
              <ChevronRight
                sx={{ color: theme.palette.common.white, fontSize: 40 }}
              />
            </StyledBusinessFormLine>
            <StyledBusinessFormStep
              onClick={() => router.push('/register/contact')}
              style={{ cursor: 'pointer' }}
            >
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
                Business Type<span>*</span>
              </StyledBusinessFormFieldLabel>
              <BusinessTypeSelect
                value={businessType}
                onChange={handleBusinessTypeChange}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: !country ? 0 : '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Country<span>*</span>
              </StyledBusinessFormFieldLabel>
              <CountrySelect
                required
                country={country}
                handleChange={handleCountryChange}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                {country === 'SE' ? 'Organization Number' : 'CVR'}
                <span>*</span>
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                inputProps={{ minLength: 8 }}
                placeholder="------"
                value={cvr}
                onChange={(evt) => setCvr(evt.target.value)}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel>
                Registered Business Name<span>*</span>
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                placeholder="EatCO2"
                value={registeredBusinessName}
                onChange={(evt) => setRegisteredBusinessName(evt.target.value)}
              />
            </Box>

            <StyledBusinessFormContinueButton
              sx={{ marginTop: toRem('48px') }}
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
export default observer(BusinessForm)
