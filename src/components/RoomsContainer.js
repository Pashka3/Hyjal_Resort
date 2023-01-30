import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withConsumer } from '../context';

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withConsumer(RoomsContainer);
