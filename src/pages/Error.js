import React from 'react'
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Error() {
  return (
    <Hero >
      <Banner title ='404' subtitle='page not found'>
      <Button  href="/" className="BannerButton" variant="primary">BACK TO HOME</Button>
      </Banner>
      </Hero>
  )
}
