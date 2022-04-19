import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Password from '@app/components/Password'

const PasswordPage = () => {
  return (
    <PageLayout title="Password">
      <Password />
    </PageLayout>
  )
}

export default observer(PasswordPage)
