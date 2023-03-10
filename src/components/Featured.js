import React, { Component } from 'react';
import { RoomContext } from '../context';
import Room from './Room';
import Title from './Title';

export default class Featured extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured rooms" />
        <div className="featured-rooms-center">{rooms}</div>
      </section>
    );
  }
}
