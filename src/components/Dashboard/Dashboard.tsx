import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import { ArrowUpward } from '@mui/icons-material'
import DashboardChart from '../DashboardChart'
import {
  StyledDasboardOverviewSection,
  StyledDashboardOverviewSectionMainTitle,
  StyledDashboard,
  StyledDashboardOverviewSectionItem,
  StyledDashboardOverviewSectionItemTitle,
  StyledDashboardOverviewSectionItemText,
  StyledDashboardChartSection,
  StyledDashboardChartSectionHeader,
  StyledDashboardChartSectionHeaderText,
  StyledDashboardChartSectionHeaderChip,
  StyledDashboardOverviewSectionDataContainer,
} from './Dashboard.styled'

const Dashboard = () => {
  const [isChartDayView, setIsChartDayView] = useState(true)

  return (
    <StyledDashboard>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} lg={8}>
          <StyledDasboardOverviewSection>
            <StyledDashboardOverviewSectionMainTitle>
              Overview
            </StyledDashboardOverviewSectionMainTitle>
            <StyledDashboardOverviewSectionDataContainer>
              <StyledDashboardOverviewSectionItem>
                <StyledDashboardOverviewSectionItemTitle>
                  Compensation Amount
                </StyledDashboardOverviewSectionItemTitle>
                <StyledDashboardOverviewSectionItemText>
                  48 DEK
                  <span>
                    +2.5% <ArrowUpward sx={{ fontSize: 10 }} />{' '}
                  </span>
                </StyledDashboardOverviewSectionItemText>
              </StyledDashboardOverviewSectionItem>
              <StyledDashboardOverviewSectionItem>
                <StyledDashboardOverviewSectionItemTitle>
                  CO2 Compensated
                </StyledDashboardOverviewSectionItemTitle>
                <StyledDashboardOverviewSectionItemText negative>
                  0,3 L
                  <span>
                    -2.4% <ArrowUpward sx={{ fontSize: 10 }} />{' '}
                  </span>
                </StyledDashboardOverviewSectionItemText>
              </StyledDashboardOverviewSectionItem>
            </StyledDashboardOverviewSectionDataContainer>
          </StyledDasboardOverviewSection>

          <StyledDashboardChartSection>
            <StyledDashboardChartSectionHeader>
              <StyledDashboardChartSectionHeaderText>
                Compensation Stats.
              </StyledDashboardChartSectionHeaderText>
              <Box display="flex">
                <StyledDashboardChartSectionHeaderChip
                  label="Day View"
                  active={isChartDayView}
                  onClick={() => setIsChartDayView(true)}
                />
                <StyledDashboardChartSectionHeaderChip
                  label="Month View"
                  right
                  active={!isChartDayView}
                  onClick={() => setIsChartDayView(false)}
                />
              </Box>
            </StyledDashboardChartSectionHeader>
            <DashboardChart />
          </StyledDashboardChartSection>
        </Grid>
        <Grid item xs={12} lg={5}></Grid>
      </Grid>
    </StyledDashboard>
  )
}
export default Dashboard
