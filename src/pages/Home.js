import Button from 'react-bootstrap/Button';
import Services from '../components/Services';
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Get closer to nature"
          subtitle="Rent a room for a cheap price"
        >
          <Button href="/Rooms" className="BannerButton" variant="primary">
            Our Rooms
          </Button>
        </Banner>
      </Hero>
      <Services />
      <Featured />
      <Footer />
    </>
  );
};

export default Home;
