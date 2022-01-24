import { createActions, createReducer } from 'reduxsauce'
import { Reducer } from 'redux'

export type UserState = {
  data: User | null
}

// Actions
export const { Types, Creators } = createActions({
  setUser: ["user"],  
  logout: [],  
}) 

const INITIAL_STATE: UserState = {
  data: null
}

// Handlers
const setUser: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  return { data: action.user }
}
const logout: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  return { ...INITIAL_STATE }
} 

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.LOGOUT]: logout,
})

 