import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyle';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
