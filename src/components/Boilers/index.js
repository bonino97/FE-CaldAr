import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Boiler from './Boiler';

import { getAllBoilersAction } from '../../store/actions/boilersActions';
import { addNewBoilerAction } from '../../store/actions/boilersActions';


const Boilers = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBoilers = () => dispatch(getAllBoilersAction());
    getAllBoilers();
  }, []);

  const { loading, error, boilers } = useSelector((state) => state.boilers);

  // Llama el action.
  const addNewBoiler = (boiler) => dispatch(addNewBoilerAction(boiler));


  return (
    <div>
      <>
        <h2 className='text-center my-5'>Listado de Calderas</h2>
        {loading ? <h4 className='text-center'> Loading... </h4> : null}

        {error ? (
          <p className='alert alert-danger p-2 m-4 text-center'>
            Ocurrio un error.
          </p>
        ) : null}

        <div className='row pb-2'>
          <div className='col-12 text-center'>
            <button className='btn btn-primary m-1' onClick=''>
              Agregar Proveedor (React Forms)
            </button>
            <button className='btn btn-primary m-1' onClick=''>
              Agregar Proveedor (Final Forms)
            </button>
          </div>
        </div>

        <table className='table table-striped'>
          <thead className='bg-primary table-dark'>
            <tr>
              <th scope='col'>Id#</th>
              <th scope='col'>Descripi&oacute;n</th>
              <th scope='col'>Tipo</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {boilers.length === 0
              ? 'No hay Proveedores para mostrar'
              : boilers.map((boiler) => (
                  <Boiler key={boiler._id} boiler={boiler} />
                ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Boilers;



