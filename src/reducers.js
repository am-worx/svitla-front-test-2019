import { combineReducers } from "redux";
import { candidatesReducer } from "./modules/candidates/ducks/candidatesReducer";

const rootReducer = combineReducers({ candidates: candidatesReducer });

export default rootReducer;
