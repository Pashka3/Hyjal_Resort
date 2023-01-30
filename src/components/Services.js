import React, { Component } from 'react';
import Title from './Title';
import data from '../services-data';

export default class extends Component {
  state = {
    services: [
      {
        icon: data.services_canoeing,
        title: 'Canoneing',
        info: data.services_canInfo,
      },
      {
        icon: data.services_hiking,
        title: 'Hiking',
        info: data.services_hikInfo,
      },
      {
        icon: data.services_biking,
        title: 'Biking',
        info: data.services_bikInfo,
      },
      {
        icon: data.services_MTouring,
        title: 'Motorcycle Touring',
        info: data.services_MTInfo,
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article className="services-article" key={`item-${item.title}`}>
                <img src={item.icon} className="services-image" />
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
