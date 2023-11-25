import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAll } from './reducers/pokeReducer'
import Pokedex from './components/Pokedex'
const logger = require('./utils/logger')
function App() {
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAll())
  },[])
  //functions
  const handleClick = () =>{
    logger.info('click')
  }
  return (
    <Pokedex handleClick={handleClick} pokemon={pokemon}/>
  )
}

export default App