import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './pokeReducer'
const store = configureStore({
    reducer:{
        pokemon: pokeReducer
    }
})
export default store