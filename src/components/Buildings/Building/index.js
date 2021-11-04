import React from 'react';

const Building = ({ building }) => {
  const { name, address, category, description } = building;

  return (
    <tr>
      <td>
        <span className='font-weight-bold'> {name} </span>
      </td>
      <td>{address}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td className='actions'>
        <button type='button' className='btn btn-primary mr-2'>
          Editar
        </button>
        <button type='button' className='btn btn-danger'>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Building;
