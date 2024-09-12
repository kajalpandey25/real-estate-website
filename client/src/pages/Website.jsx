import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Carousel from '../components/Carousel/Carousel';
import CommercialProjects from '../components/Commercial/Commercial';
import ProjectStats from '../components/ProjectStats/ProjectStats';
import YoutubeVideos from '../components/YoutubeVideos/YoutubeVideos';
import Testimonials from '../components/Testimonials/Testimonials';


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <Companies />
    <FeaturedProjects />
    <Carousel/>
    <Residencies/>
    <CommercialProjects/>
    <ProjectStats/>
    <YoutubeVideos />
    <Carousel/>
    <Testimonials/>
    <Value/>
    <Contact/>
    <GetStarted/>
  </div>
  )
}

export default Website