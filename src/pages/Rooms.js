import React from 'react';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomHero">
        <Banner title="Our rooms">
          <Button href="/" className="BannerButton" variant="primary">
            Return Home
          </Button>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
