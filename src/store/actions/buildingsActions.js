import client from '../../config/axios';

import {
  ADD_BUILDING,
  ADD_BUILDING_SUCCESS,
  ADD_BUILDING_ERROR,
  EDIT_BUILDING,
  EDIT_BUILDING_SUCCESS,
  EDIT_BUILDING_ERROR,
  DELETE_BUILDING,
  DELETE_BUILDING_SUCCESS,
  DELETE_BUILDING_ERROR,
} from '../../types/buildings';

// Crear Nuevo Edificio.

export function addNewBuildingAction(building) {
  return (dispatch) => {
    // Primero intenta cargar un edificio. Cargando = True.
    client.post('/building', building);
    dispatch(addNewBuilding());
    try {
      // Si lo agrega correctamente, dispara la accion con el objeto de edificio cargado correctamente.
      dispatch(addNewBuildingSuccess(building));
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewBuildingError(true));
    }
  };
}

const addNewBuilding = () => ({
  type: ADD_BUILDING,
});

// Si el edificio se guarda en la base de datos.
const addNewBuildingSuccess = (building) => ({
  type: ADD_BUILDING_SUCCESS,
  payload: building,
});

// Si ocurre un error en el guardado del edificio.
const addNewBuildingError = (status) => ({
  type: ADD_BUILDING_ERROR,
  payload: status,
});

// Editar Edificio.

export const editBuildingAction = (building) => {
  console.log('Desde editBuildingAction Action.');
  return () => {};
};

const editBuilding = () => ({
  type: EDIT_BUILDING,
});

// Eliminar Edificio.
const deleteBuilding = () => ({
  type: DELETE_BUILDING,
});

export const deleteBuildingAction = () => {
  console.log('Desde deleteBuildingAction Action.');
  return () => {};
};
