import React from 'react';
import './Container.scss';
const Container = ({children}) => {
  return (
    <div className='layout-wrapper'>
      <div className='layout-container'>
      {children}
      </div>
    </div>
  );
};
export default Container;