import {createSlice} from '@reduxjs/toolkit'
import pokeService from '../services/fetchPokemon'
const initialState = ['there should be a pokemon here']
const pokeSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{
        fetchAllPokemon(state,action){
            // console.log(action)
            const content = action.payload
            // console.log('content',content)
            return content.results
        },
    }
})
export const {fetchAllPokemon} = pokeSlice.actions
export const fetchAll = () => {
    return async dispatch => {
        // console.log('at fetchAll in pokereducer')
        const pokemonList = await pokeService.getAllPokemon()
        // console.log('pokelist',pokemonList)
        dispatch(fetchAllPokemon(pokemonList))
    }
}
export default pokeSlice.reducer