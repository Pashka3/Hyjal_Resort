import React from 'react';
import Title from '../components/Title';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact" />
      <div className="in-touch">
        <Title title="GET IN TOUCH" />
        <p>
          Please fill our the form below and we will get bac to you as soon as
          possible
        </p>
      </div>
      <div className="contact-panel">
        <div className="contact-items">
          <i class="bi bi-phone "></i>
          <h6>Phone</h6>
          <p>66 666 666 666</p>
        </div>
        <div className="contact-items">
          <i class="bi bi-geo-alt"></i>
          <h6>Address</h6>
          <p>Mount Hyjal</p>
          <p>Tanaris - Caverns of Time</p>
        </div>
        <div className="contact-items">
          <i class="bi bi-envelope"></i>
          <h6>Email</h6>
          <p>Mount-Hyjal@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
