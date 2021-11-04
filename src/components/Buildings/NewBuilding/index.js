import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewBuildingAction } from '../../../store/actions/buildingsActions';

const NewBuilding = ({ history }) => {
  // useState Se utiliza para setear los valores en los campos del formulario.
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  // Permite utilziar los dispatch.
  const dispatch = useDispatch();

  // Acceder al state del Store! [!IMPORTANTE!]
  const { loading, error } = useSelector((state) => state.buildings);
  
  // Llama el action.
  const addNewBuilding = (building) => dispatch(addNewBuildingAction(building));

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar formulario.
    if (name.trim() === '' || address.trim() === '' || category.trim() === '')
      return;

    //Si no hay errores.
    //Crear Edificio.
    const building = {
      name,
      address,
      category,
      description,
    };

    addNewBuilding(building);

    // Redireccionar a la lista de edificios.
    history.push('/');
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
                <label>
                  Nombre Edificio <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del Edificio'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Direccion Edificio <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Direccion del Edificio'
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Categoria Edificio <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Categoria del Edificio'
                  name='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>Descripcion Edificio</label>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Descripcion del Edificio'
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group text-center'>
                <span className='font-weight-bold text-danger'>
                  * Campos Requeridos
                </span>
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
            {loading ? <p> Loading... </p> : null}

            {error ? (
              <p className='alert alert-danger p-2 m-4 text-center'>
                Ocurrio un error.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBuilding;
