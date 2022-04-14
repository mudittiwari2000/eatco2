import React from 'react'
import BusinessIcon from '../../assets/svg/BusinessIcon'
import UserIcon from '@app/assets/svg/UserIcon'
import { Box, TextField } from '@mui/material'
import {
  StyledBusinessForm,
  StyledBusinessFormCard,
  StyledBusinessFormStepsContainer,
  StyledBusinessFormStep,
  StyledBusinessFormLine,
  StyledBusinessFormStepIconContainer,
  StyledBusinessFormStepText,
} from './BusinessForm.styled'
import { ChevronRight } from '@mui/icons-material'

const BusinessForm = () => {
  return (
    <StyledBusinessForm>
      <StyledBusinessFormCard>
        <StyledBusinessFormStepsContainer>
          <StyledBusinessFormStep position="start">
            <StyledBusinessFormStepIconContainer>
              <BusinessIcon />
            </StyledBusinessFormStepIconContainer>
            <StyledBusinessFormStepText>Business</StyledBusinessFormStepText>
          </StyledBusinessFormStep>
          <StyledBusinessFormLine>
            <ChevronRight />
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
          <TextField variant="outlined" />
          <TextField variant="outlined" />
        </Box>
      </StyledBusinessFormCard>
    </StyledBusinessForm>
  )
}
export default BusinessForm
