import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Track from '../components/Track';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Track />
      <Events />
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default Home;
