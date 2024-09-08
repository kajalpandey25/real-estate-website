import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import ProjectsCarousel from './components/ProjectsCarousel';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Categories />
      <ProjectsCarousel />
      <Footer />
    </div>
  );
};

export default App;
