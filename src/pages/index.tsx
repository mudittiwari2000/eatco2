import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { rem } from 'polished'

const StyledMainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: ${rem('128px')};
`

export const StyledPrimaryButton = styled(Button)<{ $isDisabled?: boolean }>`
  &&& {
    margin: ${rem('16px')};
    background-color: rgb(10, 23, 71, 0.8);

    &:hover {
      background-color: rgb(10, 23, 71);
    }

    ${(p) =>
      p.$isDisabled &&
      css`
        pointer-events: none;
        background-color: rgba(191, 167, 167, 0.5);
        color: #000000;
        cursor: not-allowed;
      `}
  }
`

const Home: NextPage = () => {
  return (
    <StyledMainWrapper>
      <Image height="59px" width="156px" alt="logo" src="/static/logo.png" />
      Hi go to /register
    </StyledMainWrapper>
  )
}

export default Home
