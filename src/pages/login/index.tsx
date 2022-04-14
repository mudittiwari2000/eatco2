import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '../../layouts/PageLayout'
import Login from '../../components/Login'

const LoginPage = () => {
  return (
    <PageLayout title="Login">
      <Login />
    </PageLayout>
  )
}

export default observer(LoginPage)
