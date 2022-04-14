import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Verification from '@app/components/Verification'

const VerificationPage = () => {
  return (
    <PageLayout title="Verification">
      <Verification />
    </PageLayout>
  )
}

export default observer(VerificationPage)
