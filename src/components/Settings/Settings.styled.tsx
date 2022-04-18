import theme from '@app/theme'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { ContainedButton } from '../Button'

export const StyledSettings = styled.div`
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

export const StyledSettingsCard = styled.div`
  max-width: ${rem('601px')};
  width: 100%;
  padding: ${rem('24px')} 0;
  background-color: #fff;
  box-shadow: 0px 3px 20px #0000001a;
  border-radius: ${rem('20px')};
  text-align: center;

  ${theme.breakpoints.down('md')} {
    border-radius: ${rem('20px')};
  }
`

export const StyledSettingsCardContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${theme.breakpoints.down('md')} {
    height: 100%;
  }
`

export const StyledSettingsCardHeader = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${rem('26px')};
  line-height: ${rem('34px')};
  margin-bottom: ${rem('28px')};
  color: #333333;
`

export const StyledSettingsGoBackButton = styled(ContainedButton)`
  &&& {
    white-space: nowrap;
    width: 100%;
    max-width: ${rem('212px')};
    margin: 0 auto;
    margin-bottom: ${rem('24px')};
  }
`
