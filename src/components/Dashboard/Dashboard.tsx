import Link from 'next/link'
import React from 'react'
import {
  StyledDashboard,
  StyledDashboardCard,
  StyledDashboardCardContent,
  StyledDashboardCardHeader,
  StyledDashboardGoBackButton,
} from './Dashboard.styled'

const Dashboard = () => {
  return (
    <StyledDashboard>
      <StyledDashboardCard>
        <StyledDashboardCardContent>
          <StyledDashboardCardHeader>Dashboard</StyledDashboardCardHeader>
          <Link passHref href="/register">
            <StyledDashboardGoBackButton>
              Back to Sign up
            </StyledDashboardGoBackButton>
          </Link>
        </StyledDashboardCardContent>
      </StyledDashboardCard>
    </StyledDashboard>
  )
}
export default Dashboard
