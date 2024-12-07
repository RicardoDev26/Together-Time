import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { togetherUsers } from "../../../BaseDeDatoFalsa/BDUsers";

interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: number | null;
  username: string;
  photo: () => void
  gender: string
  location: string
  joined: string

}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: togetherUsers,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        lastname: string;
        email: string;
        phone: number | null;
        username: string;
        photo: () => void
        gender: string
        location: string
        joined: string
      }>
    ) => {
      state.users.push(action.payload)
    },

    updateUser: (
      state,
      action: PayloadAction<{
        id: string;
        name?: string;
        lastname?: string;
        email?: string;
        phone?: number | null;
        username?: string;
        photo?: () => void
        gender: string
        location: string
        joined: string
      }>
    ) => {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...action.payload,
        };
      }
    },

    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },

    clearUsers: (state) => {
      state.users = []
    }
  }
})

export const { addUser, updateUser, removeUser, clearUsers } = userSlice.actions
export default userSlice.reducer
