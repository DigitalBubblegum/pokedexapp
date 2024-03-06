const PokeInformation = ({pokemonSingle}) => {
    return(
        <div>
            { !pokemonSingle ? <p className="text-center font-semibold text-white">enter a valid Pokémon name to get information Ex: "pikachu" or "charizard" </p> : 
            <div className="flex-col">
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold transition hover:text-white">{pokemonSingle.name.toUpperCase()}</h2>
            </div>
            <div className="py-5"></div>
            <div className="flex justify-evenly">
                <div>
                    <img src={pokemonSingle.sprites.other.home.front_default} alt={pokemonSingle.name} className="bg-blue-600 rounded-3xl transition hover:bg-green-500 shadow-2xl border-solid border-2 border-black"></img>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">About</h2>
                    <h4 className="text-xl text-white">{pokemonSingle.flavorText}</h4>
                    <div className="py-5"></div>
                    <div className="flex justify-evenly">
                        <div className="font-semibold">
                        <h3>ID: <span className="text-white">{pokemonSingle.id}</span></h3>
                        <h3>Height: <span className="text-white">{pokemonSingle.height}</span></h3>
                        <h3>Weight: <span className="text-white">{pokemonSingle.weight}</span></h3>
                    </div>
                    <div className="py-5"></div>
                    <div>
                        <h3 className="font-semibold">Types</h3>
                        <ul>
                            {pokemonSingle.types.map(type => <li key={type.slot}><span className="text-white transition-colors hover:text-green-500">{type.type.name}</span></li>)}
                        </ul>
                    </div>
                    <div className="py-5"></div>
                    <div>
                        <h2 className="font-bold">Stats</h2>
                        <ul>
                            {pokemonSingle.stats.map(stat => <li key={stat.stats}><span className="font-semibold">{stat.stat.name}</span> : <span className="text-white transition-colors hover:text-green-500">{stat.base_stat}</span></li>)}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            
            </div> }
        </div>
    )
}
export default PokeInformation