import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from './reducers'
import { albumAPI } from './reducers/Albums/AlbumService/AlbumService'
import { photoAPI } from './reducers/Photos/PhotoService/PhotoService'

const store = configureStore({
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
            .concat(albumAPI.middleware)
            
            .concat(photoAPI.middleware)
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

