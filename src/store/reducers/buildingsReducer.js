import {
  ADD_BUILDING,
  ADD_BUILDING_SUCCESS,
  ADD_BUILDING_ERROR,
  GET_BUILDINGS,
  GET_BUILDINGS_SUCCESS,
  GET_BUILDINGS_ERROR,
  DELETE_BUILDING,
  DELETE_BUILDING_SUCCESS,
  DELETE_BUILDING_ERROR,
} from '../../types/buildings';

// Cada reducer tiene su propio State.
const initialState = {
  buildings: [],
  error: null,
  loading: false,
  building: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BUILDING:
      return {
        ...state,
        loading: true,
      };

    case ADD_BUILDING_SUCCESS:
      return {
        ...state,
        loading: false,
        buildings: [...state.buildings, action.payload],
        error: false,
        // Esto genera una copia del arreglo inicial que recibimos de edificios y le agrega en caso de exito, el nuevo edificio.
      };

    case ADD_BUILDING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case GET_BUILDINGS:
      return {
        ...state,
        loading: true,
      };

    case GET_BUILDINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        buildings: action.payload,
        error: false,
      };

    case GET_BUILDINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case DELETE_BUILDING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_BUILDING_SUCCESS:
      return {
        ...state,
        loading: false,
        buildings: [...state.buildings, action.payload],
        error: false,
        // Esto genera una copia del arreglo inicial que recibimos de edificios y le agrega en caso de exito, el nuevo edificio.
      };

    case DELETE_BUILDING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };
    default:
      return state;
  }
}
