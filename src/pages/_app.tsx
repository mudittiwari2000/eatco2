import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StoreProvider, UsersStore } from '../store'
import theme from '../theme'

const store = new UsersStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EATCO2</title>
      </Head>
      <CssBaseline />
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp
