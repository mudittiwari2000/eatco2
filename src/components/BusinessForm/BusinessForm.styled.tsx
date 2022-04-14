import theme from '@app/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { ContainedButton } from '../Button'

export const StyledBusinessForm = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledBusinessFormCard = styled.div`
  max-width: ${rem('709px')};
  width: 100%;
  padding: ${rem('56px')} 0;
  background-color: #fff;
  box-shadow: 0px 3px 20px #0000001a;
  border-radius: ${rem('20px')};
`

export const StyledBusinessFormCardContent = styled.div`
  max-width: ${rem('471px')};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledBusinessFormStepsContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${rem('60px')};
  padding: ${rem('22px')} 0 ${rem('56px')} 0;
`

export const StyledBusinessFormLine = styled.div`
  width: 100%;
  height: 20px;
  background: #035d621a;
  border-radius: ${rem('30px')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledBusinessFormStep = styled('div', {
  shouldForwardProp: (props) => props !== 'position',
})<{
  position?: 'start' | 'end'
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: max-content;
  top: 0;
  ${(props) =>
    props.position === 'start'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`

export const StyledBusinessFormStepIconContainer = styled('div', {
  shouldForwardProp: (props) => props !== 'inactive',
})<{
  inactive?: boolean
}>`
  display: flex;
  width: max-content;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #1daf9e;
  padding: ${rem('16px')} ${rem('18px')} ${rem('16px')} ${rem('19px')};
  box-shadow: 0px 3px 10px #318fb51a;
  z-index: 2;

  ${(props) =>
    props.inactive &&
    css`
      border-color: white;
    `}
`
export const StyledBusinessFormStepText = styled('p', {
  shouldForwardProp: (props) => props !== 'inactive',
})<{
  inactive?: boolean
}>`
  margin: 0;
  margin-top: ${rem('11px')};
  text-align: center;
  font: normal normal 600 18px/23px ${theme.typography.fontFamily};
  color: ${theme.palette.primary.main};

  ${(props) =>
    props.inactive &&
    css`
      color: #959597;
    `}
`

export const StyledBusinessFormFieldLabel = styled.label`
  margin-bottom: ${rem('6px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${rem('18px')};
  line-height: ${rem('24px')};
  color: #333333;
`

export const StyledBusinessFormContinueButton = styled(ContainedButton)`
  &&& {
    width: 100%;
  }
`
