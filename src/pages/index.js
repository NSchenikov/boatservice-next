import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from '../components/About';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Order from '../components/Order';

export default function Home() {
  return (
    <>
      <Head>
        <title>Прокат лодок и сапов</title>
        <meta name="description" content="Аренда лодок, сапов и катамаранов в живописных местах" />
      </Head>
      <GlobalStyle />
      <Header />
      <main>
        <Banner />
        <About />
        <Location />
        <Gallery />
        <Order />
      </main>
      <Footer />
    </>
  );
}
