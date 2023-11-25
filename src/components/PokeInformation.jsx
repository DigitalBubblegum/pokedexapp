const PokeInformation = ({pokemonSingle}) => {
    return(
        <div>
            { pokemonSingle === null ? <p className="defaultPokemonInformation">enter a pokemon to get started</p> : 
            <>
            <h1>{pokemonSingle.name.toUpperCase()}</h1>
            <div className="dexViewMain">
                <img src={pokemonSingle.sprites.other.home.front_default} alt={pokemonSingle.name} className="pokemon-image"></img>
                <div>
                    <h2>About</h2>
                    <div className="about-iwh">
                        ID: {pokemonSingle.id}
                        Height: {pokemonSingle.height}
                        Weight: {pokemonSingle.weight}
                    </div>
                    <h3>Types</h3>
                    <ul>
                        {pokemonSingle.types.map(type => <li key={type.slot}>{type.type.name}</li>)}
                    </ul>
                    <h2>Stats</h2>
                    <ul>
                        {pokemonSingle.stats.map(stat => <li key={stat.stats}>{stat.stat.name} : {stat.base_stat}</li>)}
                    </ul>
                </div>
            </div>
            </> }
        </div>
    )
}
export default PokeInformation