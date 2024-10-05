import React from 'react';
import Header from './components/Header';
import Description from './components/Description';
import Carousel from './components/Carousel';
import Calendar from './components/Calendar';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Carousel />
      <Calendar />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;