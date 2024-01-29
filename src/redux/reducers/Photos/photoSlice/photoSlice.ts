import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "../ActionCreator/photoActionCreator";
import { PhotoType } from "../../../types/photoType";

interface PhotoState{
    photos: PhotoType[];
    isLoading: boolean;
    error: string|unknown;
}

const initialState: PhotoState = {
    photos: [],
    isLoading: false,
    error: ''
}

export const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder
         .addCase(fetchPhotos.pending, (state) => {
                state.isLoading = true;
            })
         .addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
                state.isLoading = false;
                state.photos = action.payload;
            })
         .addCase(fetchPhotos.rejected, (state, action: PayloadAction<string|unknown>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { actions: photoActions } = photoSlice
export const { reducer: photoReducer } = photoSlice
