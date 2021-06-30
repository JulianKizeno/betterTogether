import React from 'react';
import PropTypes from "prop-types";
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src='https://i.imgur.com/SexWZxK.png' alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string
}

export default CarouselItem;
