import { combineReducers } from "redux";
import buildingsReducer from "./buildingsReducer";
import boilersReducer from "./boilersReducer";
import usersReducer from "./usersReducer";

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  buildings: buildingsReducer,
  boilers: boilersReducer,
  users: usersReducer,
});
