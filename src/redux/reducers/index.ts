import { combineReducers } from "redux";
import  {userReducer}  from "./Users/userSlice/userSlice";


export const rootReducer = combineReducers({
  users: userReducer,

});

export type RootState = ReturnType<typeof rootReducer>;