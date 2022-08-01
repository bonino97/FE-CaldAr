import {
    ADD_BOILER,
    ADD_BOILER_SUCCESS,
    ADD_BOILER_ERROR,
    GET_BOILERS,
    GET_BOILERS_SUCCESS,
    GET_BOILERS_ERROR,
    DELETE_BOILER,
    DELETE_BOILER_SUCCESS,
    DELETE_BOILER_ERROR,
    EDIT_BOILER,
    EDIT_BOILER_SUCCESS,
    EDIT_BOILER_ERROR,
    SET_BOILER
  } from '../../types/boilers';
  
  // Cada reducer tiene su propio State.
  const initialState = {
    boilers: [],
    error: null,
    loading: false,
    boiler: null,
    selectedBoiler: null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_BOILER:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_BOILER_SUCCESS:
        return {
          ...state,
          loading: false,
          boilers: [...state.boilers, action.payload],
          error: false,
        };
  
      case ADD_BOILER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case GET_BOILERS:
        return {
          ...state,
          loading: true,
        };
  
      case GET_BOILERS_SUCCESS:
        return {
          ...state,
          loading: false,
          boilers: action.payload,
          error: false,
        };
  
      case GET_BOILERS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case DELETE_BOILER:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_BOILER_SUCCESS:
        return {
          ...state,
          loading: false,
          boilers: state.boilers.filter(
            (boiler) => boiler._id !== action.payload
          ),
          error: false,
        };
  
      case DELETE_BOILER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case EDIT_BOILER:
        return {
          ...state,
          loading: false,
          boiler: action.payload,
        };
  
      case EDIT_BOILER_SUCCESS:
        return {
          ...state,
          loading: false,
          boilers: state.boilers.filter(
            (boiler) => boiler._id !== action.payload
          ),
          error: false,
        };
  
      case EDIT_BOILER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
      case SET_BOILER:
        return {
          ...state,
          loading: false,
          selectedBoiler: action.payload,
        };
      default:
        return state;
    }
  }
  