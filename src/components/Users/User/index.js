import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import {
  deleteUserAction,
  setUserAction,
} from "../../../store/actions/usersActions";

const User = ({ user }) => {
  const { _id, firstName, lastName, email, department } = user;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  const onDeleteUser = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion es irreversible.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteUserAction(id));
      }
    });
  };

  const onEditRedirection = (id) => {
    dispatch(setUserAction(user));
    history.push(`/users/edit/${id}`);
  };

  return (
    <tr>
      <td>
        <span className="font-weight-bold"> {_id} </span>
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{department}</td>
      <td className="actions">
        <button
          type="button"
          onClick={() => onEditRedirection(_id)}
          className="btn btn-primary m-1"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={() => onDeleteUser(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default User;
