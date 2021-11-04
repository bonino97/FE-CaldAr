import React from 'react';
import Building from './Building';

const Buildings = () => {
  const buildings = [
    {
      id: 1,
      name: 'Juan Cruz',
      address: 'San Luis 724',
      category: 'Edificio Nuevo',
      description: '13 Pisos, 3 Habitaciones y 2 baños.',
    },
  ];
  return (
    <>
      <h2 className='text-center my-5'>Listado de Edificios</h2>
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Direccion</th>
            <th scope='col'>Categoria</th>
            <th scope='col'>Descripcion</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {buildings.length === 0
            ? 'No hay Edificios'
            : buildings.map((building) => (
                <Building key={building.id} building={building} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Buildings;
