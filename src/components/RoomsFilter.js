import React from 'react';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, pets } =
    context;

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-rooms">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <Form.Label htmlFor="type">room type</Form.Label>
          <Form.Select name="type" value={type} onChange={handleChange}>
            {types}
          </Form.Select>
        </div>
        {/*select capacity */}
        <div className="form-group">
          <Form.Label htmlFor="capacity">Guests</Form.Label>
          <Form.Select name="capacity" value={capacity} onChange={handleChange}>
            {people}
          </Form.Select>
        </div>
        {/*select price */}
        <div className="form-group">
          <Form.Label htmlFor="price">Room Price ${price}</Form.Label>
          <Form.Range
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>
        {/*select pets */}
        <div className="form-group">
          <Form.Check
            type="switch"
            name="pets"
            value={pets}
            onChange={handleChange}
            label="Pets allowed"
          />
        </div>
      </form>
    </section>
  );
}
