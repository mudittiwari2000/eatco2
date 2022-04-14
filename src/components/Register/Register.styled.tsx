import BrandLogo from '@app/assets/svg/BrandLogo'
import theme from '@app/theme'
import styled from '@emotion/styled'
import { rem } from 'polished'

export const StyledRegister = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`

export const StyledRegisterLeftView = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem('28px')} ${rem('38px')};
  flex-grow: 1;
  width: ${rem('785px')};
  position: relative;
  z-index: 2;
  background-color: ${theme.palette.common.white};
`

export const StyledRegisterLeftViewLogoContainer = styled.div`
  display: flex;
`

export const StyledBrandLogo = styled(BrandLogo)`
  &&& {
    width: 155px;
    height: 55px;
  }
`

export const StyledRegisterLeftViewMainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${rem('470px')};
  width: 100%;
  margin: 0 auto;
`

export const StyledRegisterLeftViewMainContainerHeader = styled.h2`
  width: 100%;
  margin: 0;
  margin-bottom: ${rem('10px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${rem('45px')};
  line-height: ${rem('59px')};
  color: ${theme.palette.primary.dark};
  white-space: nowrap;
  text-align: left;
`

export const StyledRegisterLeftViewMainContainerSubHeader = styled.h4`
  width: 100%;
  margin: 0;
  margin-bottom: ${rem('60px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${rem('30px')};
  line-height: ${rem('40px')};
  color: ${theme.palette.primary.main};
  white-space: nowrap;
  text-align: left;
`

export const StyledRegisterLeftViewFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${rem('50px')};
`

export const StyledRegisterLeftViewFieldLabel = styled.label`
  margin-bottom: ${rem('6px')};
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${rem('18px')};
  line-height: ${rem('24px')};
  color: #333333;
`

export const StyledRegisterLeftViewLoginText = styled.p`
  color: #333333;
  font-family: ${theme.typography.fontFamily};
  font-size: ${rem('20px')};
  line-height: ${rem('26px')};
  font-weight: normal;
  text-align: left;
  width: 100%;

  a {
    text-decoration: none;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.fontFamily};
    font-size: ${rem('20px')};
    line-height: ${rem('26px')};
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
  width: 100%;
`
