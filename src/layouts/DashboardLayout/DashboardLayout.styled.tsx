import styled from '@emotion/styled'
import { rem } from 'polished'

export const StyledDashboardLayout = styled.div`
  display: flex;
  width: 100%;
`

export const StyledDashboardLayoutContent = styled('div', {
  shouldForwardProp: (p) => p !== 'isDesktopView',
})<{
  isDesktopView?: boolean
}>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f7f7f7;
  padding-left: ${(p) => (p.isDesktopView ? rem('264px') : 0)};
`
