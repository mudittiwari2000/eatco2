import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Dashboard from '@app/components/Dashboard'

const DashboardPage = () => {
  return (
    <PageLayout title="Dashboard">
      <Dashboard />
    </PageLayout>
  )
}

export default observer(DashboardPage)
