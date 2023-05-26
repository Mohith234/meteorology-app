import React, { useState } from 'react';
import mainlogo from './img/cloudy.png';
import Geofeatures from './components/Geofeatures';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState('');

  return (
    <div className='m-7 px-2'>
      <div className='pt-4 flex flex-row'>
        <div className="header mx-3 pt-3 text-xl">
          <img className='inline' src={mainlogo} alt="logo"/>
        </div>
        <div className="text-2xl my-3 font-semibold">
          Meteorology App
        </div>
      </div>
      <Geofeatures location={location} />
    </div>
  );
};

export default App;
