import theme from '@app/theme'
import { toRem } from '@app/utils'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { InputBase } from '@mui/material'
import { rem } from 'polished'

export const StyledContactForm = styled.div`
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

export const StyledContactFormCard = styled.div`
  max-width: ${rem('709px')};
  width: 100%;
  padding: ${rem('56px')} ${rem('119px')};
  background-color: #fff;
  box-shadow: 0px 3px 20px #0000001a;
  border-radius: ${rem('20px')};
`

export const StyledContactFormStepsContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${rem('60px')};
  padding: ${rem('22px')} 0 ${rem('56px')} 0;
`

export const StyledContactFormLine = styled.div`
  width: 100%;
  height: 20px;
  background: #1daf9e;
  border-radius: ${rem('30px')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledContactFormStep = styled('div', {
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

export const StyledContactFormStepIconContainer = styled('div', {
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
      border-color: transparent;
      cursor: pointer;
    `}
`
export const StyledContactFormStepText = styled('p', {
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

export const StyledContactFormStepsAddress = styled('div', {
  shouldForwardProp: (props) => props !== 'border',
})<{
  border?: boolean
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 ${rem('21px')};

  ${(props) =>
    props.border &&
    css`
      border-left: 1px solid rgba(3, 93, 98, 0.2);
    `}
`

export const StyledContactFormStepAddressLabel = styled.label`
  color: ${theme.palette.primary.main};
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${toRem('16px')};
  line-height: ${toRem('20px')};
`

export const StyledContactFormStepAddressBox = styled.div`
  display: flex;
  justify-content: space-between;
  background: #1daf9e0d;
  padding: ${rem('11px')} 0;
  border-radius: ${rem('10px')};
`
export const StyledContactFormStepAddressInput = styled(InputBase)`
  &&& {
    color: ${theme.palette.primary.light};

    & input {
      font-family: ${theme.typography.fontFamily};
      font-weight: 600;
      font-size: ${toRem('14px')};
      line-height: ${toRem('18px')};
    }
  }
`
