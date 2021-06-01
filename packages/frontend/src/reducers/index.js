import studentsReducer from "./studentsReducer";
import { combineReducers } from "redux";

export default combineReducers({ studentsState: studentsReducer });
