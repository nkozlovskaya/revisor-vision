import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../../types/userType";
import { fetchUsers } from "../ActionCreators/userActionCreator";

interface UserState{
    users: UserType[];
    isLoading: boolean;
    error: string|unknown;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder
         .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
         .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
                state.isLoading = false;
                state.users = action.payload;
            })
         .addCase(fetchUsers.rejected, (state, action: PayloadAction<string|unknown>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
