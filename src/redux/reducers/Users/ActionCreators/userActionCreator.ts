import axios from "axios";
import { UserType } from "../../../types/userType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../api/api";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<UserType[]>(`${baseUrl}users`);
            return response.data;
        }
        catch {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
)