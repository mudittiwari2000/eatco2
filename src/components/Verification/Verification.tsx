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

const Verification = () => {
  return (
    <StyledVerification>
      <StyledVerificationCard>
        <StyledVerificationCardContent>
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
