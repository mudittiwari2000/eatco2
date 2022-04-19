import theme from '@app/theme'
import { toRem } from '@app/utils'
import styled from '@emotion/styled'

export const StyledRegister = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`

export const StyledRegisterLeftView = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${toRem('28px')} ${toRem('38px')};
  flex-basis: 40%;
  position: relative;
  z-index: 2;
  background-color: ${theme.palette.common.white};
`

export const StyledRegisterLeftViewLogoContainer = styled.div`
  display: flex;
`

export const StyledRegisterLeftViewMainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${toRem('471px')};
  width: 100%;
  margin: 0 auto;
`

export const StyledRegisterLeftViewMainContainerHeader = styled.h2`
  width: 100%;
  margin: 0;
  margin-bottom: ${toRem('10px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${toRem('45px')};
  line-height: ${toRem('59px')};
  color: ${theme.palette.primary.dark};
  white-space: nowrap;
  text-align: left;
`

export const StyledRegisterLeftViewMainContainerSubHeader = styled.h4`
  width: 100%;
  margin: 0;
  margin-bottom: ${toRem('12px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${toRem('30px')};
  line-height: ${toRem('40px')};
  color: ${theme.palette.primary.main};
  white-space: nowrap;
  text-align: left;

  ${theme.breakpoints.down('md')} {
    margin-bottom: ${toRem('12px')};
  }
`

export const StyledRegisterLeftViewFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${toRem('46px')};
`

export const StyledRegisterLeftViewFieldLabel = styled.label`
  margin-bottom: ${toRem('6px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${toRem('16px')};
  line-height: ${toRem('22px')};
  color: #333333;

  span {
    color: ${theme.palette.primary.light};
  }
`

export const StyledRegisterLeftViewLoginText = styled.p`
  color: #333333;
  font-family: ${theme.typography.fontFamily};
  font-size: ${toRem('16px')};
  line-height: ${toRem('20px')};
  font-weight: normal;
  text-align: left;
  width: 100%;

  a {
    text-decoration: none;
    color: ${theme.palette.primary.main};
    font-weight: 600;
    transition: color 150ms ease-out;

    &:hover {
      cursor: pointer;
      color: ${theme.palette.primary.dark};
    }
  }
`

export const StyledRegisterLeftViewFooterContainer = styled.div`
  display: flex;
`

export const StyledRegisterRightView = styled('div', {
  shouldForwardProp: (props) => props !== 'bgImg',
})<{ bgImg: string }>`
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImg});
  background-position: top right;
  flex-basis: 60%;
`
