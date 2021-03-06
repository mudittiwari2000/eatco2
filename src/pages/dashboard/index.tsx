import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Dashboard from '@app/components/Dashboard'
import DashboardLayout from '@app/layouts/DashboardLayout'

const DashboardPage = () => {
  return (
    <PageLayout title="Dashboard">
      <DashboardLayout title="Dashboard">
        <Dashboard />
      </DashboardLayout>
    </PageLayout>
  )
}

export default observer(DashboardPage)
