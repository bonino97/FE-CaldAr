import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Building from './Building';

import { getAllBuildingsAction } from '../../store/actions/buildingsActions';

const Buildings = () => {
  const dispatch = useDispatch();
  const getAllBuildings = () => dispatch(getAllBuildingsAction());
  useEffect(() => {
    getAllBuildings();
  }, []);

  const { loading, error, buildings } = useSelector((state) => state.buildings);

  return (
    <>
      <h2 className='text-center my-5'>Listado de Edificios</h2>
      {loading ? <h4 className='text-center'> Loading... </h4> : null}

      {error ? (
        <p className='alert alert-danger p-2 m-4 text-center'>
          Ocurrio un error.
        </p>
      ) : null}

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
                <Building key={building._id} building={building} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Buildings;
