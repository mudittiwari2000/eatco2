import theme from '@app/theme'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { ContainedButton } from '../Button'

export const StyledForgotPassword = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledForgotPasswordCard = styled.div`
  max-width: ${rem('601px')};
  width: 100%;
  padding: ${rem('24px')} 0;
  background-color: #fff;
  box-shadow: 0px 3px 20px #0000001a;
  border-radius: ${rem('20px')};
  text-align: center;
`

export const StyledForgotPasswordCardContent = styled.div`
  max-width: ${rem('470px')};
  padding: 0 ${rem('12px')};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledForgotPasswordCardHeader = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${rem('24px')};
  line-height: ${rem('32px')};
  margin-bottom: ${rem('20px')};
  color: #333333;
`

export const StyledForgotPasswordNextButton = styled(ContainedButton)`
  &&& {
    width: 100%;
    max-width: ${rem('212px')};
    margin: 0 auto;
    margin-bottom: ${rem('24px')};
  }
`
