import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './pokeReducer'
import dexValReducer from './dexValReducer'
import notificationReducer from './notificationReducer'
const store = configureStore({
    reducer:{
        pokemon: pokeReducer,
        pokemonSingle: dexValReducer,
        notification: notificationReducer,
    }
})
export default store