import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import ForgotPassword from '@app/components/ForgotPassword'

const ForgotPasswordPage = () => {
  return (
    <PageLayout title="Forgot Password">
      <ForgotPassword />
    </PageLayout>
  )
}

export default observer(ForgotPasswordPage)
