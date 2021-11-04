import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditBuilding = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [buildingState, setBuilding] = useState({
    name: '',
    address: '',
    category: '',
    description: '',
  });

  const { loading, error, building } = useSelector((state) => state.buildings);

  useEffect(() => {
    setBuilding(building);
  }, [building]);

  const { name, address, category, description } = buildingState;

  const onFormChange = (e) => {
    setBuilding({
      ...buildingState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Producto
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
                  onChange={onFormChange}
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
                  onChange={onFormChange}
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
                  onChange={onFormChange}
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
                  onChange={onFormChange}
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

export default EditBuilding;
