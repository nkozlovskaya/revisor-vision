import { combineReducers } from "redux";
import  {userReducer}  from "./Users/userSlice/userSlice";
import { albumAPI } from "./Albums/AlbumService/AlbumService";
import { photoAPI } from "./Photos/PhotoService/PhotoService";



export const rootReducer = combineReducers({
  users: userReducer,
  [albumAPI.reducerPath]: albumAPI.reducer,
  [photoAPI.reducerPath]: photoAPI.reducer
  
});

export type RootState = ReturnType<typeof rootReducer>;



