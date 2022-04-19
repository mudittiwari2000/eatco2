import theme from '@app/theme'
import { toRem } from '@app/utils'
import styled from '@emotion/styled'
import { rgba } from 'polished'

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: ${toRem('230px')};
  height: 100vh;
  background-color: ${theme.palette.background.default};
  padding: ${toRem('40px')} 0;
  display: flex;
  flex-direction: column;
  z-index: 999;
`

export const StyledSidebarBrandLogoContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-left: -12px;
  margin-bottom: ${toRem('60px')};
`

export const StyledSidebarItemList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const StyledSidebarItem = styled('div', {
  shouldForwardProp: (p) => p !== 'active' && p !== 'last',
})<{
  active?: boolean
  last?: boolean
}>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${toRem('12px')} ${toRem('24px')};
  margin-bottom: ${(p) => (p.last ? 0 : toRem('8px'))};
`

export const StyledSidebarItemIcon = styled('div', {
  shouldForwardProp: (p) => p !== 'active',
})<{ active?: boolean }>`
  margin-right: ${toRem('12px')};
  padding: ${toRem('6px')};
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${(p) =>
    p.active ? theme.palette.primary.light : 'transparent'};

  svg {
    height: 20px;
    width: 20px;
    color: ${(p) => (p.active ? 'white' : theme.palette.grey[500])};
  }
`

export const StyledSidebarItemText = styled('p', {
  shouldForwardProp: (p) => p !== 'active',
})<{ active?: boolean }>`
  transition: ${theme.transitions.create(['color', 'font-weight'], {
    duration: 150,
  })};
  font-family: ${theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${(p) => (p.active ? 'bold' : 'normal')};
  font-size: ${toRem('16px')};
  line-height: ${toRem('22px')};

  color: ${(p) => (p.active ? theme.palette.primary.light : '#6B6B6B')};
`

export const StyledSidebarLogoutButtonContainer = styled(StyledSidebarItem)`
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  border-top: 1px solid ${rgba(theme.palette.grey[500], 0.12)};
`
