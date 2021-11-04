import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteBuildingAction } from '../../../store/actions/buildingsActions';

const Building = ({ building }) => {
  const dispatch = useDispatch();
  const { _id, name, address, category, description } = building;

  const deleteBuilding = (id) => {
    dispatch(deleteBuildingAction(id));
  };

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
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => deleteBuilding(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Building;
