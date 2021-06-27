import React from 'react';
import './Email.css';
import { InlineWidget } from 'react-calendly';

const Email = () => {
  return (
    <div className='email'>
      <InlineWidget
        className='widget'
        url='https://calendly.com/coach_now/monarchbaygolfcourse?month=2021-06'
      />
    </div>
  );
};

export default Email;
