import { combineReducers } from 'redux';
import buildingsReducer from './buildingsReducer';

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  buildings: buildingsReducer,
});
