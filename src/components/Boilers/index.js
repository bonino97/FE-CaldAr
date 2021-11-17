import React, { useEffect, useState } from 'react';

import Boiler from './Boiler';
import NewBoiler from './NewBoiler';

const Boilers = () => {
  const [showAddBoiler, setShowAddBoiler] = useState(false);

  const [boilers, setBoilers] = useState([]);

  useEffect(() => {
    const getBoilers = async () => {
      const boilersFromServer = await fetchBoilers();
      setBoilers(boilersFromServer);
    };

    getBoilers();
  }, []);

  //fetch boilers (All)
  const fetchBoilers = async () => {
    const res = await fetch('http://localhost:5000/boilers');
    const data = await res.json();

    return data;
  };

  //fetch a boiler (by id)
  // const fetchBoiler = async (id) => {
  //   const res = await fetch(`http://localhost:5000/boilers/{id}`);
  //   const data = await res.json();

  //   return data;
  // };

  //Add Boiler
  const addBoiler = async (boiler) => {
    const res = await fetch(`http://localhost:5000/boilers`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(boiler),
    });

    const data = await res.json();

    setBoilers([...boilers, data]);
  };

  // Delete Boiler
  const deleteBoiler = async (id) => {
    await fetch(`http://localhost:5000/boilers/${id}`, {
      method: 'DELETE',
    });

    setBoilers(boilers.filter((boiler) => boiler.id !== id));
  };

  // onClick function to set showAddBoiler
  const onClick = () => {
    setShowAddBoiler(!showAddBoiler);
  };

  return (
    <div className=''>
      <div className=''>
        <h2 className=''>Boilers General Listing</h2>
        <button
          color={showAddBoiler ? 'red' : 'green'}
          text={showAddBoiler ? 'Close Add Boiler' : '+ Add Boiler'}
          onClick={onClick}
        />
      </div>
      {showAddBoiler && <NewBoiler onAdd={addBoiler} />}
      <table className=''>
        <thead>
          <tr>
            <th> Id &#35; </th>
            <th> Description </th>
            <th> Type </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {boilers.length === 0
            ? 'No Boilers To Show'
            : boilers.map((boiler) => (
                <Boiler key={boiler.id} boiler={boiler} onDelete={deleteBoiler} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boilers;