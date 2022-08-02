import React from "react";
import { Form, Field } from "react-final-form";
import { required } from "../../../utils/validations";

import Button from "../../../shared/Button/Button";
import TextInput from "../../../shared/TextInput/TextInput";

const NewUser = ({ onAdd }) => {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  };

  const onSubmitUser = (values) => {
    console.log(values);

    onAdd(values);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Usuario
            </h2>

            <Form
              onSubmit={onSubmitUser}
              initialValues={initialFormValues}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Nombre <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="firstName"
                      component="input"
                      className="form-control"
                      placeholder="Nombre"
                      label="Nombre:"
                      validate={required}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Apellido <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="lastName"
                      component="input"
                      className="form-control"
                      placeholder="Apellido"
                      label="Apellido"
                      validate={required}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="email"
                      component="input"
                      className="form-control"
                      placeholder="Email"
                      label="Email"
                      validate={required}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Departamento <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="department"
                      component="input"
                      className="form-control"
                      placeholder="Departamento"
                      label="Departamento"
                      validate={required}
                    />
                  </div>
                  <div className="">
                    <button
                      disabled={submitting || pristine}
                      type="submit"
                      className="btn btn-primary m-1"
                    >
                      Agregar
                    </button>
                    <button
                      disabled={submitting || pristine}
                      onClick={form.reset}
                      className="btn btn-danger m-1"
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
