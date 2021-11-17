import { useState } from 'react';

import EditBoiler from '../EditBoiler';

const Boiler = ({ boiler, onDelete }) => {
  const [showEditBoiler, setShowEditBoiler] = useState(false);

  // onClick function to set showEditBoiler
  const onClickEdit = () => {
    setShowEditBoiler(!showEditBoiler);
  };

  const editBoiler = async (updatedValuesBoiler) => {
    const res = await fetch(`http://localhost:5000/boilers/${boiler.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedValuesBoiler),
    });

    console.log(
      `editBoiler: ${updatedValuesBoiler.id} , ${updatedValuesBoiler.description} , ${updatedValuesBoiler.type}`
    );
  };

  return (
    <>
      <tr>
        <td>
          <span className='font-weight-bold'> {boiler.id}</span>
        </td>
        <td>{boiler.description}</td>
        <td>{boiler.type}</td>
        <td className='actions'>
          <button
            type='button'
            className='btn btn-primary m-1'
            onClick={onClickEdit}
          >
            Editar
          </button>
          <button
            type='button'
            className='btn btn-danger m-1'
            onClick={() => onDelete(boiler.id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
      {showEditBoiler && <EditBoiler boiler={boiler} onEdit={editBoiler} />}
    </>
  );
};

export default Boiler;
