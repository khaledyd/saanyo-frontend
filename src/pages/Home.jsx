import React from "react";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import HeroTwo from "../components/home/HeroTwo";
import Nav from "../components/home/Nav";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div>
      <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saanyoapp" />
        <meta name="twitter:creator" content="@Khalidyusuf_" />
        <meta
          name="twitter:title"
          content="Finally, I deployed one of the side projects I've been working on for the last two weeks.
    It is a payment gateway for mobile payment systems.
    Tech stack: MERN, Material UI for Ui components.
    I greatly appreciate your reviews, comments, and advice.
    
    #tech "
        />
        <meta name="twitter:description" content="hi" />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/12679999/pexels-photo-12679999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </head>
      <Nav />
      <Hero />
      <Services />
      <HeroTwo />
      <Footer />
    </div>
  );
};

export default Home;
