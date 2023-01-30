import React from 'react';
import Room from './Room';

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>
          We're sorry but at this moment there is no rooms matched to your
          search parameters.
        </h3>
      </div>
    );
  }
  return (
    <section className="rooms-list">
      <div className="rooms-list-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
