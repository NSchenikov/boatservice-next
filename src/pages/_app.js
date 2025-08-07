import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Прокат лодок, сапов и катамаранов в Переславле',
              image: 'https://supboatpz.ru/images/logo/logo.png',
              url: 'https://supboatpz.ru',
              telephone: '+7 (915) 973-88-04',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ул. Левая Набережная, рядом с домом 107',
                addressLocality: 'Переславль-Залесский',
                addressCountry: 'RU',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 56.739,
                longitude: 38.859,
              },
              openingHours: 'Mo-Su 09:00-21:00',
              sameAs: [],
            }),
          }}
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
