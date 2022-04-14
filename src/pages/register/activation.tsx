import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '@app/layouts/PageLayout'
import Activation from '@app/components/Activation'

const ActivationPage = () => {
  return (
    <PageLayout title="Activation">
      <Activation />
    </PageLayout>
  )
}

export default observer(ActivationPage)
