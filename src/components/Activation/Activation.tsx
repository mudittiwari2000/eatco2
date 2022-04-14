import React from 'react'
import {
  StyledActivation,
  StyledActivationCard,
  StyledActivationCardContent,
  StyledActivationCardHeader,
  StyledActivationCardSubHeader,
  StyledActivationNextButton,
} from './Activation.styled'
import Link from 'next/link'

const Activation = () => {
  // const [code, setCode] = React.useState('')

  return (
    <StyledActivation>
      <StyledActivationCard>
        <StyledActivationCardContent>
          <StyledActivationCardHeader>
            Activation code
          </StyledActivationCardHeader>
          <StyledActivationCardSubHeader>
            We sent an activation on your email
          </StyledActivationCardSubHeader>
          <Link passHref href="/register/contact">
            <StyledActivationNextButton>NEXT</StyledActivationNextButton>
          </Link>
        </StyledActivationCardContent>
      </StyledActivationCard>
    </StyledActivation>
  )
}
export default Activation
