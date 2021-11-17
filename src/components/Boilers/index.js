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
    <>
      <div className='row col-10 my-5 justify-content-between'>
        <h2  className=''>Listado de calderas</h2>
        <button
          type='button'
          className='btn btn-danger nuevo-post d-block d-md-inline-block'
          onClick={onClick}
        >
          Nueva Caldera &#43;
        </button>
      </div>
      {showAddBoiler && <NewBoiler onAdd={addBoiler} />}
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'> Id &#35; </th>
            <th scope='col'> Descripcion </th>
            <th scope='col'> Tipo </th>
            <th scope='col'> Acciones </th>
          </tr>
        </thead>
        <tbody>
          {boilers.length === 0
            ? 'No hay calderas registradas para mostrar'
            : boilers.map((boiler) => (
                <Boiler
                  key={boiler.id}
                  boiler={boiler}
                  onDelete={deleteBoiler}
                />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Boilers;
