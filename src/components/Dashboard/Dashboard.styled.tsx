import theme from '@app/theme'
import { toRem } from '@app/utils'
import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { css } from '@emotion/react'
import { darken } from 'polished'

export const StyledDashboard = styled.div`
  min-height: calc(100vh - 121px);
  width: 100%;
  background-color: #f4f6f8;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 ${toRem('30px')};
  ${theme.breakpoints.down('lg')} {
    justify-content: stretch;
    align-items: stretch;
  }
`

export const StyledDasboardOverviewSection = styled.div`
  background-color: ${theme.palette.common.white};
  border-radius: ${toRem('10px')};
  padding: ${toRem('10px')} ${toRem('20px')};
  max-width: calc(100vw - 60px);
  margin-bottom: ${toRem('28px')};
  display: flex;
  align-items: center;

  ${theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`

export const StyledDashboardOverviewSectionMainTitle = styled.h3`
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${toRem('18px')};
  line-height: ${toRem('24px')};
  color: ${theme.palette.primary.main};
  flex: 1;

  ${theme.breakpoints.down('md')} {
    margin-bottom: ${toRem('16px')};
  }
`

export const StyledDashboardOverviewSectionDataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;

  ${theme.breakpoints.down('md')} {
    width: 100%;
    justify-content: center;
  }
`

export const StyledDashboardOverviewSectionItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledDashboardOverviewSectionItemTitle = styled.h5`
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${toRem('14px')};
  line-height: ${toRem('17px')};
  color: #333333;
  white-space: nowrap;
`

export const StyledDashboardOverviewSectionItemText = styled('h5', {
  shouldForwardProp: (p) => p !== 'negative',
})<{ negative?: boolean }>`
  display: flex;
  align-items: center;
  font-family: ${theme.typography.fontFamily};
  font-weight: bold;
  font-size: ${toRem('24px')};
  line-height: ${toRem('32px')};
  color: #333333;

  span {
    font-family: ${theme.typography.fontFamily};
    font-weight: 300;
    font-size: ${toRem('12px')};
    line-height: ${toRem('16px')};
    margin-left: 7px;
    color: ${(p) => (p.negative ? '#F32900' : theme.palette.primary.light)};
  }
`

export const StyledDashboardChartSection = styled.div`
  background-color: ${theme.palette.common.white};
  border-radius: ${toRem('10px')};
  padding: ${toRem('10px')} ${toRem('20px')} ${toRem('48px')};
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 60px);
  margin-bottom: ${toRem('28px')};
`

export const StyledDashboardChartSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${toRem('16px')};
`

export const StyledDashboardChartSectionHeaderText = styled(
  StyledDashboardOverviewSectionMainTitle
)`
  font-size: ${toRem('18px')};
  line-height: ${toRem('22px')};
  color: ${theme.palette.primary.main};
`

export const StyledDashboardChartSectionHeaderChip = styled(Chip, {
  shouldForwardProp: (p) => p !== 'active' && p !== 'right',
})<{ active?: boolean; right?: boolean }>`
  font-family: 'IBM Plex Sans', ${theme.typography.fontFamily};
  font-weight: medium;
  font-size: ${toRem('12px')};
  line-height: ${toRem('16px')};
  background-color: #f7f7f7;
  color: ${theme.palette.primary.dark};
  z-index: 1;
  margin-right: 12px;
  padding-right: 16px;
  transition: ${theme.transitions.create(['background-color', 'color'])};

  &:hover {
    background-color: ${darken(0.02, '#f7f7f7')};
  }

  &:active {
    box-shadow: none;
  }

  ${(p) =>
    p.active &&
    css`
      background-color: ${theme.palette.primary.light};
      color: ${theme.palette.common.white};
      z-index: 2;

      &:hover {
        background-color: ${darken(0.02, theme.palette.primary.light)};
      }
    `}
  ${(p) =>
    p.right &&
    css`
      margin-left: -12px;
      margin-right: 0;
      padding-left: 20px;
      padding-right: 0;
    `}
  ${(p) =>
    p.right &&
    p.active &&
    css`
      margin-left: -32px;
      padding-left: 0;
      padding-right: 0;
    `}
  ${(p) =>
    !p.right &&
    p.active &&
    css`
      padding-left: 0;
      padding-right: 0;
      margin-right: -12px;
    `}
`
