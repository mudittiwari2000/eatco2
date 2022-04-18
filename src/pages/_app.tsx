import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@app/createEmotionCache'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>EATCO2</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
