import { useSelector } from 'react-redux'
import Searchbar from './components/Searchbar'
import PokeInformation from './components/PokeInformation'
// const logger = require('./utils/logger')
function App() {
  const pokemonSingle = useSelector(state => state.pokemonSingle)
  return (
    <div className='mainWindow'>
      <h1 className='mainAppName'>Pokédex App</h1>
      <br/>
      <Searchbar/>
      <br/>
      <PokeInformation pokemonSingle={pokemonSingle}/>
    </div>
  )
}

export default App