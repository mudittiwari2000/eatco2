import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EATCO2</title>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
