import React, { useState } from 'react';
import './ListItem.css';
import image from './profile.jpg';
import Email from './Email';

const ListItem = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='ListItem'>
      <img src={image} alt=''></img>
      <div className='name'>
        <b>JOHN DOE</b> <b className='price'>$60</b>
      </div>

      <div className='per'> per hour</div>
      <div className='itemInfo'>
        <div>
          <b>Experience: </b>
          <span>10 years</span>
        </div>
        <div>
          <b>Great for: </b>
          <span>Beginners, Single, Handicaps</span>
        </div>
        <div>
          <b>Availability: </b>
          <span>Tu: 10 - 6 pm</span>
        </div>
        <div>
          <b className='hideLabel'>Availability: </b>
          <span>Th: 2 - 4 pm</span>
        </div>
      </div>

      <button className='button' onClick={() => setIsActive(!isActive)}>
        BOOK LESSON
      </button>

      {isActive && <Email />}
    </div>
  );
};

export default ListItem;
