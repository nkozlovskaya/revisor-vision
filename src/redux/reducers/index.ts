import { combineReducers } from "redux";
import  {userReducer}  from "./Users/userSlice/userSlice";
import { albumAPI } from "./Albums/AlbumService/AlbumService";


export const rootReducer = combineReducers({
  users: userReducer,
  [albumAPI.reducerPath]: albumAPI.reducer
  
});

export type RootState = ReturnType<typeof rootReducer>;



// import { albumReducer } from "./Albums/albumSlice/albumSlice";
// albums: albumReducer