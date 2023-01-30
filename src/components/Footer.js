import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-features">
          <div>
            <h4>Phone Support</h4>
            <p>24 HOURS DAY</p>
            <h6>+ 66 666 666 666</h6>
          </div>
          <div>
            <h4>Fallow Us</h4>
            <p>SOCIAL MEDIA CHANNELS</p>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
        <div className="copyright">
          © 2023 - 2023 Hyjal-resort - All Rights Reserved.
        </div>
      </section>
    );
  }
}
