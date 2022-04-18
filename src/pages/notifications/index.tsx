import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Notifications from '@app/components/Notifications'
import DashboardLayout from '@app/layouts/DashboardLayout'

const NotificationsPage = () => {
  return (
    <PageLayout title="Dashboard">
      <DashboardLayout title="Notifications">
        <Notifications />
      </DashboardLayout>
    </PageLayout>
  )
}

export default observer(NotificationsPage)
