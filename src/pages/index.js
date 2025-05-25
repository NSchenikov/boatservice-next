import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from '../components/About';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Order from '../components/Order';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const locationRef = useRef(null);
  const [setShowMap] = useState(false);

  useEffect(() => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }
}, []);

  return (
    <>
      <Header locationRef={locationRef} onLocationClick={() => setShowMap(true)} />
      <main>
        <Banner />
        <About />
        <Location ref={locationRef} />
        <Gallery />
        <Order />
      </main>
      <Footer />
    </>
  );
}
