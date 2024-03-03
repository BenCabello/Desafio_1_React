import React from 'react';
import Tags from './Tags';

const MyCard = ({image, name, description, text, color}) => {
  return (
   <div className='card'>
    <img src={image} className='card-img-top' alt={name} />
    <div className='card-body'>
      <h4 className='card-title'>{name}</h4>
      <p className='card-text'>{description}</p>
      <div className='boton'><Tags text={text} color={color}/></div>
    </div>
   </div>
  );
}

export default MyCard;