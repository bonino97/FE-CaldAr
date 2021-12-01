import React from 'react';
import { Form, Field } from 'react-final-form';
import { required, email } from '../../../utils/validations';

import Button from '../../../shared/Button/Button';
import TextInput from '../../../shared/TextInput/TextInput';

const NewBoiler = ({ onAdd }) => {
  const onSubmitBoiler = (values) => {
    console.log(values);

    onAdd(values);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Proveedor (Final Forms)
            </h2>

            <Form
              onSubmit={onSubmitBoiler}
              initialValues={{ name: '', email: '', phone: '' }}
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
                  Nombre Proveedor <span className='text-danger'>*</span>
                </label>
                    <Field
                      name='name'
                      component='input'
                      className='form-control'
                      placeholder='Nombre del Proveedor'
                      label='Nombre:'
                      validate={required}
                    />
                  </div>
                  <div className='form-group'>
                <label>
                  Email Proveedor <span className='text-danger'>*</span>
                </label>
                    <Field
                      name='email'
                      component='input'
                      className='form-control'
                      placeholder='Email del Proveedor'
                      label='Email:'
                      validate={email}
                    />
                  </div>
                  <div className='form-group'>
                <label>
                  Telefono Proveedor <span className='text-danger'>*</span>
                </label>
                    <Field
                      name='phone'
                      component='input'
                      className='form-control'
                      placeholder='Telefono del Proveedor'
                      label='Telefono:'
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

export default NewBoiler;
