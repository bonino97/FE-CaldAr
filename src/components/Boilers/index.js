import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Boiler from './Boiler';
import NewBoiler from './NewBoiler';

import { getAllBoilersAction } from '../../store/actions/boilersActions';
import { addNewBoilerAction } from '../../store/actions/boilersActions';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute', 
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadows: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%',
  },
}));

const Boilers = () => {
  const [showModalFF, setShowModalFF] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBoilers = () => dispatch(getAllBoilersAction());
    getAllBoilers();
  }, []);

  const { loading, error, boilers } = useSelector((state) => state.boilers);

  // Llama el action.
  const addNewBoiler = (boiler) => dispatch(addNewBoilerAction(boiler));


  //crea nuevo boiler desde formulario hecho con final forms
  const addBoilerFF = (boiler) => {
    addNewBoiler(boiler);
    openCloseModalFF();
  };

  //modal para formulario hecho con final forms
  const openCloseModalFF = () => {
    setShowModalFF(!showModalFF);
  };

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
            <button className='btn btn-primary m-1' onClick={openCloseModalFF}>
              Agregar Caldera
            </button>
            <Modal open={showModalFF} onClose={openCloseModalFF}>
              <NewBoiler onAdd={addBoilerFF} />
            </Modal>
          </div>
        </div>

        <table className='table table-striped'>
          <thead className='bg-primary table-dark'>
            <tr>
              <th scope='col'>Id#</th>
              <th scope='col'>Descripci&oacute;n</th>
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
