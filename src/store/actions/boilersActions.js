import Swal from "sweetalert2";
import axiosClient from "../../config/axios";
import {
  ADD_BOILER,
  ADD_BOILER_SUCCESS,
  ADD_BOILER_ERROR,
  EDIT_BOILER,
  EDIT_BOILER_SUCCESS,
  EDIT_BOILER_ERROR,
  DELETE_BOILER,
  DELETE_BOILER_SUCCESS,
  DELETE_BOILER_ERROR,
  GET_BOILERS,
  GET_BOILERS_SUCCESS,
  GET_BOILERS_ERROR,
  SET_BOILER,
} from "../../types/boilers";

const boilerUrl = "/boiler";

// Crear Nuevo Boiler.
export function addNewBoilerAction(boiler) {
  return async (dispatch) => {
    dispatch(addNewBoiler());
    try {
      // Primero intenta cargar una caldera. Cargando = True.
      await axiosClient.post(`${boilerUrl}`, boiler);
      // Si lo agrega correctamente, dispara la accion con el objeto de boiler cargado correctamente.
      dispatch(addNewBoilerSuccess(boiler));

      // Alerta exitosa.
      Swal.fire("Correcto", "La caldera se agrego correctamente...", "success");
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewBoilerError(true));
      // Alerta de error.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
}

const addNewBoiler = () => ({
  type: ADD_BOILER,
});

// Si la caldera se guarda en la base de datos.
const addNewBoilerSuccess = (boiler) => ({
  type: ADD_BOILER_SUCCESS,
  payload: boiler,
});

// Si ocurre un error en el guardado de la caldera.
const addNewBoilerError = (status) => ({
  type: ADD_BOILER_ERROR,
  payload: status,
});

// Obtener todas las calderas.
export function getAllBoilersAction() {
  return async (dispatch) => {
    dispatch(getAllBoilers());
    try {
      const { data } = await axiosClient.get(`${boilerUrl}/all`);
      dispatch(getAllBoilersSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllBoilersError(true));
    }
  };
}

const getAllBoilers = () => ({
  type: GET_BOILERS,
});

const getAllBoilersSuccess = (boilers) => ({
  type: GET_BOILERS_SUCCESS,
  payload: boilers,
});

const getAllBoilersError = (status) => ({
  type: GET_BOILERS_ERROR,
  payload: status,
});

// Eliminar Caldera.
export const deleteBoilerAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteBoiler());
    try {
      await axiosClient.delete(`${boilerUrl}/${id}`);
      dispatch(deleteBoilerSuccess(id));
      Swal.fire(
        "Eliminada",
        "La caldera se elimino correctamente...",
        "success"
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteBoilerError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error al eliminar la caldera, intenta de nuevo.",
      });
    }
  };
};

const deleteBoiler = () => ({
  type: DELETE_BOILER,
});

const deleteBoilerSuccess = (id) => ({
  type: DELETE_BOILER_SUCCESS,
  payload: id,
});

const deleteBoilerError = (status) => ({
  type: DELETE_BOILER_ERROR,
  payload: status,
});

// Editar caldera.
export const editBoilerAction = (boiler) => {
  return async (dispatch) => {
    try {
      // Primero intenta cargar una caldera. Cargando = True.
      await axiosClient.put(`${boilerUrl}/${boiler?._id}`, boiler);
      // Si lo agrega correctamente, dispara la accion con el objeto de boilere cargado correctamente.
      dispatch(editBoilerSuccess(boiler));
      dispatch(getAllBoilersAction());
      // Alerta exitosa.
      Swal.fire("Correcto", "La caldera se edito correctamente...", "success");
    } catch (error) {
      // Si falla, envia una notificacion de error.
      dispatch(editBoilerError(true));
      // Alerta de error.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
};

const editBoiler = () => ({
  type: EDIT_BOILER,
});

const editBoilerSuccess = (boiler) => ({
  type: EDIT_BOILER_SUCCESS,
  payload: boiler,
});

const editBoilerError = (status) => ({
  type: EDIT_BOILER_ERROR,
  payload: status,
});

export const setBoilerAction = (boiler) => {
  return async (dispatch) => {
    dispatch(setBoiler(boiler));
  };
};

const setBoiler = (boiler) => ({
  type: SET_BOILER,
  payload: boiler,
});
