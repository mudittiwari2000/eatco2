import Head from 'next/head'
import React from 'react'

type Props = {
  title?: string
  children?: React.ReactNode
}

const PageLayout = ({ title = '', children }: Props) => {
  const pageTitle = title ? `${title} | ` : ''

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}EATCO2</title>
      </Head>
      {children}
    </React.Fragment>
  )
}

export default PageLayout
