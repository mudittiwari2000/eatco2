import theme from '@app/theme'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { ContainedButton } from '../Button'

export const StyledActivation = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.breakpoints.down('md')} {
    justify-content: stretch;
    align-items: stretch;
  }
`

export const StyledActivationCard = styled.div`
  max-width: ${rem('601px')};
  width: 100%;
  padding: ${rem('24px')} 0;
  background-color: #fff;
  box-shadow: 0px 3px 20px #0000001a;
  border-radius: ${rem('20px')};
  text-align: center;

  ${theme.breakpoints.down('md')} {
    padding: ${rem('24px')} ${rem('16px')};
    border-radius: 0;
  }
`

export const StyledActivationCardContent = styled.div`
  max-width: ${rem('470px')};
  padding: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${theme.breakpoints.down('md')} {
    padding: 0 ${rem('12px')};
    height: 100%;
  }
`

export const StyledActivationCardHeader = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${rem('26px')};
  line-height: ${rem('34px')};
  margin-bottom: ${rem('28px')};
  color: #333333;
`

export const StyledActivationCardSubHeader = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-weight: normal;
  font-size: ${rem('20px')};
  line-height: ${rem('30px')};
  margin-bottom: ${rem('42px')};
  color: #333333;
`

export const StyledActivationSuccessCircle = styled.div`
  width: ${rem('60px')};
  height: ${rem('60px')};
  background-color: rgba(3, 93, 98, 0.05);
  border-radius: 50%;
  position: relative;
  z-index: 2;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
  }
`

export const StyledActivationNextButton = styled(ContainedButton)`
  &&& {
    width: 100%;
    max-width: ${rem('212px')};
    margin: 0 auto;
    margin-bottom: ${rem('24px')};
  }
`
