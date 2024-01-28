import axios from "axios";
import { UserType } from "../../../types/userType";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<UserType[]>('http://localhost:3000/users');
            return response.data;
        }
        catch {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
)