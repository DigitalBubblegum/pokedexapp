import { useDispatch } from "react-redux"
import { fetchSingle } from "../reducers/dexValReducer"

const Searchbar = ({pokemonSingle}) => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.pokemonSearchName.value)
        const content = e.target.pokemonSearchName.value
        e.target.pokemonSearchName.value =''
        dispatch(fetchSingle(content))
    }
    return(
        <div className="pokedexSearchBar">
            <form onSubmit={handleSubmit}>
                <input name="pokemonSearchName" className="pokemonSearchName" placeholder="enter pokemon name"/>
                <button>Search</button>
            </form>
            {/* {pokemonSingle === null?null:pokemonSingle.name} */}
        </div>
        
    )
}
export default Searchbar