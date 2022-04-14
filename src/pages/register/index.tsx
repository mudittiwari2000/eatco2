import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '../../layouts/PageLayout'
import Register from '../../components/Register'

const RegisterPage = () => {
  return (
    <PageLayout title="Register">
      <Register />
    </PageLayout>
  )
}

export default observer(RegisterPage)
