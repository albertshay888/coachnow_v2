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
        <b>JOHN DOE</b>
      </div>

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
          <span>Tu: 10 - 6pm / Th: 2 - 4pm</span>
        </div>
      </div>

      <button className='price' onClick={() => setIsActive(!isActive)}>
        <b>$60 </b>
        <span>per hour</span>
      </button>

      {isActive && <Email />}
    </div>
  );
};

export default ListItem;
