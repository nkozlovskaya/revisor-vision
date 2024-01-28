import { baseUrl } from "../../../api/api";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PhotoType } from "../../../types/photoType";

export const photoAPI = createApi({
    reducerPath: 'photoAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}`}),
    tagTypes: ['photos'],
    endpoints: (build) => ({
        fetchPhotos: build.query<PhotoType[], string>({
            query: (albumId: string ) => ({
                url: `photos/${albumId}`,
                
            }),
            providesTags: result => ['photos']
        })
    })
})