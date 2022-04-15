import React from 'react'
import {
  StyledVerification,
  StyledVerificationCard,
  StyledVerificationCardContent,
  StyledVerificationCardHeader,
  StyledVerificationCardSubHeader,
  StyledVerificationNextButton,
} from './Verification.styled'
import Link from 'next/link'
import { Box, useMediaQuery } from '@mui/material'
import theme from '@app/theme'
import { StyledActivationSuccessCircle } from '../Activation/Activation.styled'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

const Verification = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <StyledVerification>
      <StyledVerificationCard>
        <StyledVerificationCardContent>
          {isMdUp || (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb="16px"
            >
              <StyledActivationSuccessCircle>
                <Box className="icon">
                  <AssignmentTurnedInIcon
                    sx={{ fill: theme.palette.primary.dark }}
                  />
                </Box>
              </StyledActivationSuccessCircle>
            </Box>
          )}
          <StyledVerificationCardHeader>
            Verification
          </StyledVerificationCardHeader>
          <StyledVerificationCardSubHeader>
            We sent an activation on your email
          </StyledVerificationCardSubHeader>
          <Link passHref href="/register/activation">
            <StyledVerificationNextButton>NEXT</StyledVerificationNextButton>
          </Link>
        </StyledVerificationCardContent>
      </StyledVerificationCard>
    </StyledVerification>
  )
}
export default Verification
