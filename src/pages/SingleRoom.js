import React, { useContext } from 'react';
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../context';
import { Button } from 'react-bootstrap';
import HeroStyle from '../components/StyleHero';

export default function SingleRoom() {
  const { slug } = useParams();
  const context = useContext(RoomContext);
  const { getRoom } = context;
  const room = getRoom(slug);

  console.log({ slug });

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Button
          href="/rooms"
          variant="outline-success"
          className="primary-button"
        >
          Back to rooms
        </Button>
      </div>
    );
  }

  const { name, description, capacity, price, extras, pets, images } = room;

  const [mainImg, ...defaultImg] = images;
  return (
    <>
      <HeroStyle img={images[0]}>
        <Banner title={`${name} room`}>
          <Button
            href="/rooms"
            variant="outline-success"
            className="primary-button"
          >
            Back to rooms
          </Button>
        </Banner>
      </HeroStyle>
      <section className="single-room">
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>
              Max Capcity :{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>Pets : {pets ? 'pets allowed' : 'no pets allowed'}</h6>
          </article>
        </div>
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return (
              <img key={index} src={item} alt={name} class="d-block w-100" />
            );
          })}
        </div>
      </section>
      <section className="single-room-extras">
        <h5>extras</h5>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
