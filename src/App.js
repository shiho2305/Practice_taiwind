import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HeadlineCards from './Components/HeadlineCards';
import Food from './Components/Food';
import Category from './Components/Category';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';

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
    </div>
  );
}

export default App;
