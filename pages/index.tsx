import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import Track from '../components/Track';
import ShootingRange from '../components/ShootingRange';
import Arcade from '../components/Arcade';
import Events from '../components/Events';
import StackedCards from '../components/StackedCards';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading screen will automatically complete after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Layout>
      <Hero />
      <Track />
      <ShootingRange />
      <Arcade />
      <Events />
      <StackedCards />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default Home;
