import { useSelector } from 'react-redux'
import Searchbar from './components/Searchbar'
import PokeInformation from './components/PokeInformation'
import Notification from './components/Notification'
// const logger = require('./utils/logger')
function App() {
  const pokemonSingle = useSelector(state => state.pokemonSingle)
  const notiData = useSelector(state => state.notification)
  return (
    <div className='object-fill bg-red-600'>
      <h1 className='text-3xl font-bold text-center'>Pokédex App</h1>
      <br/>
      <Searchbar/>
      <br/>
      <Notification notiData={notiData}/>
      <br/>
      <PokeInformation pokemonSingle={pokemonSingle}/>
    </div>
  )
}

export default App