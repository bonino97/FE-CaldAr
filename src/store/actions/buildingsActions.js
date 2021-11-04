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

export const addNewBuildingAction = (building) => {
  console.log(building);
  return () => {};
};

export const editBuildingAction = (building) => {
  console.log('Desde editBuildingAction Action.');
  return () => {};
};

export const deleteBuildingAction = () => {
  console.log('Desde deleteBuildingAction Action.');
  return () => {};
};
