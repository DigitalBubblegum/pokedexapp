import { useDispatch, useSelector } from 'react-redux'
import { pokemonService } from './services/fetchPokemon'
import { useEffect } from 'react'
import { fetchAll } from './reducers/pokeReducer'
const logger = require('./utils/logger')
function App() {
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAll())
  },[])
  //functions
  const handleClick = () =>{
    console.log('click')
  }
  return (
    <div className='pokedex'>
      <div className='screen'>
        <img src='pokemon_image.png' alt='Pokemon' />
      </div>
      <div className='controls'>
        <button className='fetch' onClick={handleClick}>
          Click me
        </button>
      </div>
      <ul>
        {console.log(typeof pokemon)}
        {pokemon.map((po)=><li>{po.name}</li>)}
      </ul>
    </div>
  )
}

export default App