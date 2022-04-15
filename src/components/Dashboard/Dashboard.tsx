import React from 'react'
import {
  StyledDashboard,
  StyledDashboardCard,
  StyledDashboardCardContent,
  StyledDashboardCardHeader,
} from './Dashboard.styled'

const Dashboard = () => {
  return (
    <StyledDashboard>
      <StyledDashboardCard>
        <StyledDashboardCardContent>
          <StyledDashboardCardHeader>Dashboard</StyledDashboardCardHeader>
        </StyledDashboardCardContent>
      </StyledDashboardCard>
    </StyledDashboard>
  )
}
export default Dashboard
