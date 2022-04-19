import theme from '@app/theme'
import { toRem } from '@app/utils'
import styled from '@emotion/styled'
import { ContainedButton } from '../Button'

export const StyledPassword = styled.div`
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

export const StyledPasswordCard = styled.div`
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

export const StyledPasswordCardContent = styled.div`
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

export const StyledPasswordCardHeader = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${toRem('18px')};
  line-height: ${toRem('24px')};
  margin-bottom: ${toRem('64px')};
  color: #333333;
`

export const StyledPasswordNextButton = styled(ContainedButton)`
  &&& {
    width: 100%;
    max-width: ${toRem('212px')};
    margin: 0 auto;
    margin-bottom: ${toRem('24px')};
  }
`
