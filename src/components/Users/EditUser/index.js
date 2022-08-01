import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUserAction } from '../../../store/actions/usersActions';

const EditUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userState, setUser] = useState({
    _id: '',
    description: '',
    type: '',
  });

  const { loading, error, selectedUser } = useSelector(
    (state) => state?.users
  );

  useEffect(() => {
    setUser(selectedUser);
  }, [selectedUser]);

  if (!userState) return history.push('/');

  console.log(userState);

  const { _id, description, type } = userState;

  const onFormChange = (e) => {
    console.log(e.target.value);
    setUser({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const editUser = (user) => dispatch(editUserAction(user));

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar formulario.
    // if (
    //   id.trim() === '' ||
    //   description.trim() === '' ||
    //   type.trim() === ''
    // )
    //   return;

    //Si no hay errores.
    //Crear Caldera.
    const user = {
      _id: userState._id,
      description,
      type,
    };

    editUser(user);
    // Redireccionar a la lista de usuarios.
    history.push('/users');
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Caldera
            </h2>

            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>
                  Id# <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del Proveedor'
                  name='id'
                  value={_id}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label>
                  Descripci&oacute;n <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email del Proveedor'
                  name='description'
                  value={description}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label>
                  Tipo <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Telefono del Proveedor'
                  name='type'
                  value={type}
                  onChange={onFormChange}
                />
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
                Guardar cambios
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

export default EditUser;
