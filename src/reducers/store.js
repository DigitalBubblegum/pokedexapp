import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './pokeReducer'
import dexValReducer from './dexValReducer'
const store = configureStore({
    reducer:{
        pokemon: pokeReducer,
        pokemonSingle: dexValReducer
    }
})
export default store