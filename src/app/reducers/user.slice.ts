import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { User } from '../../types/User'

const initialState: User = {
  id: '',
  email: '',
}

const userSlice = createSlice({
  name: 'user', //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {
      state = { ...state, ...action.payload }
      return state
    },
    getUser: (state: User) => {
      return state
    },
  },
})

export const { setUser, getUser } = userSlice.actions

export const selectCurrentUser = (state: RootState) => state.user

export default userSlice.reducer
