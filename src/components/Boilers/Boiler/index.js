import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Boiler = ({ boiler }) => {
  const { _id, description, type } = boiler;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  return (
    <tr>
      <td>
        <span className='font-weight-bold'> {_id} </span>
      </td>
      <td>{description}</td>
      <td>{type}</td>
      <td className='actions'>
        <button
          type='button'
          onClick=''
          className='btn btn-primary m-1'
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-danger m-1'
          onClick=''
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Boiler;
