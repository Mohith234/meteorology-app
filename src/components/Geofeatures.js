import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeofeatures } from '../redux/geofeaturesSlice';
import searchlogo from '../img/magnifying-glass.png';
import globe from '../img/globe.png';

const Geofeatures = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.geofeatures);
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchGeofeatures(location));
  };

  return (
    <div>
      <form className='my-8 px-3 flex' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-black w-full rounded-md p-3"
            value={location}
            onChange={handleLocationChange}
            /> 
          <div className="relative pt-3 right-9">
            <button type="submit flex items-center">
              <img className='h-7' src={searchlogo} alt="search" />
            </button>
          </div>
      </form>

      <div className="mt-6 flex justify-center">
      {data && (
        <div className=" w-fit h-72 mt-4 px-6 bg-[#F1CAAD] rounded-md">
          {loading && <p>Loading...</p>}
          {error && <p>An error occurred: {error}</p>}
          <div className="city mt-6 flex justify-center">
            <h1 className='text-4xl font-bold uppercase'>{data.components.city}</h1>
          </div>
          <div className="my-3 text-sm text-gray-800 flex justify-center">
            <p>{data.formatted}</p>
          </div>
          <div className="my-5 flex justify-center">
            <img className='h-20' src={globe} alt="globe" />
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-col">
              <p className='font-bold'>Longitude</p>
              <p className='text-gray-600'>{data.geometry.lng}</p>
            </div>
            <div className="flex flex-col ml-10">
              <p className='font-bold'>Latitude</p>
              <p className='text-gray-600'>{data.geometry.lat}</p>
            </div>
          </div>
        </div>
      )} 
      </div>
    </div>
  );
};

export default Geofeatures;
