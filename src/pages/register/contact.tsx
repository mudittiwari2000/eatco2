import React from 'react'
import { observer } from 'mobx-react-lite'
import PageLayout from '../../layouts/PageLayout'
import Contact from '../../components/ContactForm'

const ContactPage = () => {
  return (
    <PageLayout title="Contact">
      <Contact />
    </PageLayout>
  )
}

export default observer(ContactPage)
