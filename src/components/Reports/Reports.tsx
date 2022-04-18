import Link from 'next/link'
import React from 'react'
import {
  StyledReports,
  StyledReportsCard,
  StyledReportsCardContent,
  StyledReportsCardHeader,
  StyledReportsGoBackButton,
} from './Reports.styled'

const Reports = () => {
  return (
    <StyledReports>
      <StyledReportsCard>
        <StyledReportsCardContent>
          <StyledReportsCardHeader>Reports</StyledReportsCardHeader>
          <Link passHref href="/register">
            <StyledReportsGoBackButton>
              Back to Sign up
            </StyledReportsGoBackButton>
          </Link>
        </StyledReportsCardContent>
      </StyledReportsCard>
    </StyledReports>
  )
}
export default Reports
