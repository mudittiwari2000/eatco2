import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '../../layouts/PageLayout'
import Business from '../../components/BusinessForm'

const BusinessPage = () => {
  return (
    <PageLayout title="Business">
      <Business />
    </PageLayout>
  )
}

export default observer(BusinessPage)
