import Swal from 'sweetalert2';
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
  GET_BUILDINGS,
  GET_BUILDINGS_SUCCESS,
  GET_BUILDINGS_ERROR,
} from '../../types/buildings';

const buildingUrl = '/building';

// Crear Nuevo Edificio.
export function addNewBuildingAction(building) {
  return async (dispatch) => {
    dispatch(addNewBuilding());
    try {
      // Primero intenta cargar un edificio. Cargando = True.
      await client.post(`${buildingUrl}`, building);
      // Si lo agrega correctamente, dispara la accion con el objeto de edificio cargado correctamente.
      dispatch(addNewBuildingSuccess(building));

      // Alerta exitosa.
      Swal.fire(
        'Correcto',
        'El edificio se agrego correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewBuildingError(true));
      // Alerta de error.
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error, intenta de nuevo.',
      });
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

// Obtener todos los Edificios.
export function getAllBuildingsAction() {
  return async (dispatch) => {
    dispatch(getAllBuildings());
    try {
      const { data } = await client.get(`${buildingUrl}/all`);
      dispatch(getAllBuildingsSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllBuildingsError(true));
    }
  };
}

const getAllBuildings = () => ({
  type: GET_BUILDINGS,
});

const getAllBuildingsSuccess = (buildings) => ({
  type: GET_BUILDINGS_SUCCESS,
  payload: buildings,
});

const getAllBuildingsError = (status) => ({
  type: GET_BUILDINGS_ERROR,
  payload: status,
});

// Eliminar Edificio.
export const deleteBuildingAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteBuilding());
    try {
      await client.delete(`${buildingUrl}/${id}`);
      dispatch(deleteBuildingSuccess(id));
      Swal.fire(
        'Eliminado',
        'El edificio se elimino correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteBuildingError(true));
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error al eliminar el edificio, intenta de nuevo.',
      });
    }
  };
};

const deleteBuilding = () => ({
  type: DELETE_BUILDING,
});

const deleteBuildingSuccess = (id) => ({
  type: DELETE_BUILDING_SUCCESS,
  payload: id,
});

const deleteBuildingError = (status) => ({
  type: DELETE_BUILDING_ERROR,
  payload: status,
});

// Editar Edificio.
export const editBuildingAction = (building) => {
  return async (dispatch) => {
    dispatch(editBuilding(building));
  };
};

const editBuilding = (building) => ({
  type: EDIT_BUILDING,
  payload: building,
});

const editBuildingSuccess = (building) => ({
  type: EDIT_BUILDING_SUCCESS,
  payload: building,
});

const editBuildingError = (status) => ({
  type: EDIT_BUILDING_ERROR,
  payload: status,
});
