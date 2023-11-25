const Searchbar = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.pokemonSearchName.value)
        e.target.pokemonSearchName.value =''
    }
    return(
        <div className="pokedexSearchBar">
            <form onSubmit={handleSubmit}>
                <input name="pokemonSearchName"/>
                <button>Search</button>
            </form>
        </div>
        
    )
}
export default Searchbar