import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewBuildingAction } from '../../../store/actions/buildingsActions';

const NewBuilding = () => {
  // Permite utilziar los dispatch.
  const dispatch = useDispatch();

  // Llama el action.
  const addNewBuilding = () => dispatch(addNewBuildingAction);

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar formulario.
    //Si no hay errores.
    //Crear Edificio.
    addNewBuilding();
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Edificio
            </h2>

            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>Nombre Edificio</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del Edificio'
                  name='name'
                />
              </div>

              <div className='form-group'>
                <label>Direccion Edificio</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Direccion del Edificio'
                  name='address'
                />
              </div>

              <div className='form-group'>
                <label>Categoria Edificio</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Categoria del Edificio'
                  name='category'
                />
              </div>

              <div className='form-group'>
                <label>Descripcion Edificio</label>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Descripcion del Edificio'
                  name='description'
                ></textarea>
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBuilding;
