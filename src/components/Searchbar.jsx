import { useDispatch } from "react-redux"
import { fetchSingle } from "../reducers/dexValReducer"

const Searchbar = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.pokemonSearchName.value)
        const content = e.target.pokemonSearchName.value.toLowerCase()
        console.log(content)
        e.target.pokemonSearchName.value =''
        dispatch(fetchSingle(content))
    }
    return(
        <div className='items-center'>
            <form onSubmit={handleSubmit}>
                <input name="pokemonSearchName" className="pokemonSearchName" placeholder="enter pokemon name"/>
                <button>Search</button>
            </form>
        </div>
        
    )
}
export default Searchbar