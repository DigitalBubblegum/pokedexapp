import { createSlice } from '@reduxjs/toolkit'
const initialState = null
const notiSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setNotification(state,action){
            return action.payload
        },
        resetNotification(state,action){
            return null
        }
    }
})
export const {setNotification,resetNotification} = notiSlice.actions
export const notiSetReset = (notiData) => {
    return async dispatch => {
        dispatch(setNotification(notiData))
        setTimeout(() => {
            dispatch(resetNotification())
        }, 1000);
    }
}
export default notiSlice.reducer