import React from "react";
import { Form, Field } from "react-final-form";
import { required } from "../../../utils/validations";

const Login = () => {
  const initialFormValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Login</h2>

            <Form
              onSubmit={onSubmit}
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
                      Email <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="email"
                      component="input"
                      className="form-control"
                      placeholder="Email"
                      label="Email:"
                      validate={required}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Password <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="password"
                      component="input"
                      className="form-control"
                      placeholder="password"
                      label="password"
                      validate={required}
                    />
                  </div>

                  <div className="">
                    <button
                      disabled={submitting || pristine}
                      type="submit"
                      className="btn btn-primary m-1"
                    >
                      Submit
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

export default Login;
