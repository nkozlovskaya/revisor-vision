import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../api/api";
import { PhotoType } from "../../../types/photoType";


export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async (albumId:string, thunkAPI) => {
        try {
            const response = await axios.get<PhotoType[]>(`${baseUrl}photos/${albumId}`);
            return response.data;
        }
        catch {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
)