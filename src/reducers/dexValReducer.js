import {createSlice} from '@reduxjs/toolkit'
import { notiSetReset } from './notificationReducer'
import pokeService from '../services/fetchPokemon'
const initialState = null
const dexSlice = createSlice({
    name:'pokemonSingle',
    initialState,
    reducers:{
        fetchSinglePokemon(state,action){
            const content = action.payload
            return content
        }
    }
})
export const {fetchSinglePokemon} = dexSlice.actions
export const fetchSingle = (searchVal) => {
    return async dispatch => {
        const pokemonInfo = await pokeService.findSinglePokemon(searchVal)
        // console.log('fetchSingle',pokemonInfo)
        pokemonInfo === 'Not Found'? dispatch(notiSetReset(pokemonInfo)) : dispatch(fetchSinglePokemon(pokemonInfo))
    }
}
export default dexSlice.reducer