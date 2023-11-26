import { useSelector } from 'react-redux'
import Searchbar from './components/Searchbar'
import PokeInformation from './components/PokeInformation'
import Notification from './components/Notification'
// const logger = require('./utils/logger')
function App() {
  const pokemonSingle = useSelector(state => state.pokemonSingle)
  const notiData = useSelector(state => state.notification)
  return (
    <div className='mainWindow'>
      <h1 className='mainAppName'>Pokédex App</h1>
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