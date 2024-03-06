import { useDispatch } from "react-redux"
import { fetchSingle } from "../reducers/dexValReducer"
import { notiSetReset } from "../reducers/notificationReducer"

const Searchbar = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.pokemonSearchName.value)
        if(!e.target.pokemonSearchName.value){
            notiSetReset('you need to enter something')
        }
        const content = e.target.pokemonSearchName.value.toLowerCase()
        // console.log(content)
        e.target.pokemonSearchName.value =''
        dispatch(fetchSingle(content))
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="flex justify-center items-center p-5">
                <input name="pokemonSearchName" className="rounded-full px-4 py-2 placeholder: text-center" placeholder="enter pokemon name"/>
                <div className="px-4"></div>
                <div className='px-4 bg-red-900 rounded-full py-2 hover:bg-green-500 hover:-translate-y-0.5 transform transition active:bg-green-700'>
                    <button>Search</button>
                </div>
                
            </form>
        </div>
        
    )
}
export default Searchbar