import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Settings from '@app/components/Settings'
import DashboardLayout from '@app/layouts/DashboardLayout'

const SettingsPage = () => {
  return (
    <PageLayout title="Dashboard">
      <DashboardLayout title="Settings">
        <Settings />
      </DashboardLayout>
    </PageLayout>
  )
}

export default observer(SettingsPage)
