import { combineReducers } from "redux";
import picsReducer from './pics_reducer'

const rootReducer = combineReducers({
    pics: picsReducer
});
  
export default rootReducer;