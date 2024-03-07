import { useSelector } from 'react-redux'
import Searchbar from './components/Searchbar'
import PokeInformation from './components/PokeInformation'
import Notification from './components/Notification'
// const logger = require('./utils/logger')
function App() {
  const pokemonSingle = useSelector(state => state.pokemonSingle)
  const notiData = useSelector(state => state.notification)
  return (
    <div className='bg-red-700 h-screen w-screen overflow-auto'>
      <h1 className='text-4xl text-center p-8 font-bold '>Pokédex<span className='text-white transition hover:text-green-500'>App</span></h1>
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