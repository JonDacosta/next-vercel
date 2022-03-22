import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

// <Typescript
type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
// Typescript>

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
