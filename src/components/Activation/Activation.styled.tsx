import theme from '@app/theme'
import { toRem } from '@app/utils'
import styled from '@emotion/styled'
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
  max-width: ${toRem('601px')};
  width: 100%;
  padding: ${toRem('24px')} 0;
  background-color: #fff;
  box-shadow: 0px 3px 20px #0000001a;
  border-radius: ${toRem('20px')};
  text-align: center;

  ${theme.breakpoints.down('md')} {
    max-width: none;
    padding: ${toRem('24px')} ${toRem('16px')};
    border-radius: 0;
  }
`

export const StyledActivationCardContent = styled.div`
  max-width: ${toRem('470px')};
  padding: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${theme.breakpoints.down('md')} {
    padding: 0 ${toRem('12px')};
    height: 100%;
  }
`

export const StyledActivationCardHeader = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${toRem('22px')};
  line-height: ${toRem('30px')};
  margin-bottom: ${toRem('20px')};
  color: #333333;
`

export const StyledActivationSuccessCircle = styled.div`
  width: ${toRem('60px')};
  height: ${toRem('60px')};
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
    max-width: ${toRem('212px')};
    margin: 0 auto;
    margin-bottom: ${toRem('24px')};
  }
`
