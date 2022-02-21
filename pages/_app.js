import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
