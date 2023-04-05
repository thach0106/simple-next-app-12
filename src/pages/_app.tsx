import type { AppProps } from 'next/app';

import '@/assets/styles/global.styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
