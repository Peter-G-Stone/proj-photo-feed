import { combineReducers } from "redux";
import picsReducer from './pics_reducer'
import authReducer from './auth_reducer'

const rootReducer = combineReducers({
    picsReducer,
    authReducer
});
  
export default rootReducer;