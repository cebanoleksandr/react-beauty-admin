import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../utils/interfaces';

interface AdminState {
  admin: IUser | null;
}

const initialState: AdminState = {
  admin: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setUserAC: (state, action: { payload: IUser }) => {
      state.admin = action.payload;
    },
    removeUserAC: (state) => {
      state.admin = null;
    },
  },
});

export const { setUserAC, removeUserAC } = adminSlice.actions;
export default adminSlice.reducer;
