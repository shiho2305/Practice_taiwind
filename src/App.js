import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HeadlineCards from './Components/HeadlineCards';
import Food from './Components/Food';
import Category from './Components/Category';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import FooterWeb from './Components/Footer_web';

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
        <Footer/>
        <ContactUs/>
        <FooterWeb/>
    </div>
  );
}

export default App;
