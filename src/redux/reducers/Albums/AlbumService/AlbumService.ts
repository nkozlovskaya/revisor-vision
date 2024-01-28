// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { AlbumType } from "../../../types/albumType";
import { baseUrl } from "../../../api/api";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const albumAPI = createApi({
    reducerPath: 'albumAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}`}),
    tagTypes: ['albums'],
    endpoints: (build) => ({
        fetchAlbums: build.query<AlbumType[], string>({
            query: (userId: string ) => ({
                url: `albums/${userId}`,
                
            }),
            providesTags: result => ['albums']
        })
    })
})




// export const fetchAlbums = createAsyncThunk(
//     'albums/fetchAlbums',
//     async (userId:string, thunkAPI) => {
//         try {
//             const response = await axios.get<AlbumType[]>(`${baseUrl}albums/:${userId}`);
//             return response.data;
//         }
//         catch {
//             return thunkAPI.rejectWithValue('Failed to fetch users');
//         }
//     }
// )