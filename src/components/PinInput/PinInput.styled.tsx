import theme from '@app/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { rem } from 'polished'

export const StyledPinInputForm = styled('form', {
  shouldForwardProp: (prop) => prop !== 'success',
})<{ success: boolean | null }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: ${(props) =>
    props.success === false ? rem('22px') : rem('49px')};
`

export const StyledPinInputFormContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
`

export const StyledPinInputField = styled('input', {
  shouldForwardProp: (prop) => prop !== 'success',
})<{ success: boolean | null }>`
  width: ${rem('32px')};
  text-align: center;
  padding: ${rem('6px')};
  margin: ${rem('8px')};
  border: none;
  border-bottom: 1px solid ${theme.palette.primary.light};
  color: #333333;
  font-family: ${theme.typography.fontFamily};
  font-size: ${rem('24px')};
  line-height: ${rem('32px')};
  font-weight: bold;

  transition: border 150ms ease-out;
  ${(props) =>
    props.success === false
      ? css`
          border-color: ${theme.palette.error.main};
        `
      : css`
          border-color: ${theme.palette.primary.light};
        `}
`

export const StyledInputFieldHelperText = styled.p`
  margin: 0;
  margin-top: ${rem('6px')};
  color: #f32900;
  font-family: ${theme.typography.fontFamily};
  font-size: ${rem('13px')};
  line-height: ${rem('17px')};
  font-weight: normal;
  width: 100%;
  text-align: left;
`
