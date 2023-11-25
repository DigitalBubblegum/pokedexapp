import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAll } from './reducers/pokeReducer'
import Searchbar from './components/Searchbar'
import PokemonList from './components/PokemonList'
const logger = require('./utils/logger')
function App() {
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(fetchAll())
  },[])
  //functions
  const handleClick = () =>{
    logger.info('click')
  }
  return (
    <div className='mainWindow'>
      <h1>Pokedex App</h1>
      <Searchbar/>
      <PokemonList handleClick={handleClick} pokemon={pokemon}/>
    </div>
  )
}

export default App