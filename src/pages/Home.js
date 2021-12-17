import React from 'react';
import About from '../components/About';
import Carrosel from '../components/Carrosel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import News from '../components/News';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container" style={{marginTop: 30}}>
          <Carrosel />
        <div className="row">
          <About />
          <News />
        </div>
      </main>
      <Footer />
    </>
  )
}
