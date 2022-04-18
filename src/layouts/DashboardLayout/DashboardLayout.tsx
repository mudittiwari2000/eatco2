import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import {
  StyledDashboardLayout,
  StyledDashboardLayoutContent,
} from './DashboardLayout.styled'
import Sidebar from '@app/components/Sidebar'
import Topbar from '@app/components/Topbar'

interface IProps {
  children: React.ReactNode
  title: string
}

const DashboardLayout: React.FC<IProps> = ({ children, title }) => {
  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <StyledDashboardLayout>
      {isDesktopView && <Sidebar />}
      <StyledDashboardLayoutContent isDesktopView={isDesktopView}>
        <Topbar title={title} />
        {children}
      </StyledDashboardLayoutContent>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
