import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Reports from '@app/components/Reports'
import DashboardLayout from '@app/layouts/DashboardLayout'

const ReportsPage = () => {
  return (
    <PageLayout title="Dashboard">
      <DashboardLayout title="Reports">
        <Reports />
      </DashboardLayout>
    </PageLayout>
  )
}

export default observer(ReportsPage)
