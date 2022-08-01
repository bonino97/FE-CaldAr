import React from 'react';
import { Form, Field } from 'react-final-form';
import { required } from '../../../utils/validations';

import Button from '../../../shared/Button/Button';
import TextInput from '../../../shared/TextInput/TextInput';

const NewUser = ({ onAdd }) => {
  const onSubmitUser = (values) => {
    console.log(values);

    onAdd(values);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Usuario
            </h2>

            <Form
              onSubmit={onSubmitUser}
              initialValues={{ _id: '', description: '', type: '' }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                <label>
                  Id# <span className='text-danger'>*</span>
                </label>
                    <Field
                      name='_id'
                      component='input'
                      className='form-control'
                      placeholder='Ingrese el id'
                      label='Id#:'
                      validate={required}
                    />
                  </div>
                  <div className='form-group'>
                <label>
                  Descripci&oacute;n <span className='text-danger'>*</span>
                </label>
                    <Field
                      name='description'
                      component='input'
                      className='form-control'
                      placeholder='Descripci&oacute;n'
                      label='Descripci&oacute;n:'
                      validate={required}
                    />
                  </div>
                  <div className='form-group'>
                <label>
                  Tipo <span className='text-danger'>*</span>
                </label>
                    <Field
                      name='type'
                      component='input'
                      className='form-control'
                      placeholder='Tipo de Usuario'
                      label='Tipo:'
                      validate={required}
                    />
                  </div>
                  <div className=''>
                    <button
                      disabled={submitting || pristine}
                      type='submit'
                      className='btn btn-primary m-1'
                    >
                      Agregar
                    </button>
                    <button
                      disabled={submitting || pristine}
                      onClick={form.reset}
                      className='btn btn-danger m-1'
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
