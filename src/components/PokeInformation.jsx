const PokeInformation = ({pokemonSingle}) => {
    return(
        <div>
            { !pokemonSingle ? <p className="text-center font-semibold text-white">enter a valid Pokémon name to get information Ex: "pikachu" or "charizard" </p> : 
            <div className="flex-col">
                <div className="flex justify-center">
                    <h2 className="text-4xl font-extrabold text-white transition hover:text-green-500">{pokemonSingle.name.toUpperCase()}</h2>
                </div>
                <div className="py-5"></div>
                <div className="hidden lg:visible lg:flex justify-evenly">
                    <div className="max-w-md m-auto">
                        <img src={pokemonSingle.sprites.other.home.front_default} alt={pokemonSingle.name} className="bg-slate-100 rounded-3xl transition hover:bg-green-500 shadow-2xl"></img>
                    </div>
                    <div className="px-6"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">About</h2>
                        <h4 className="text-xl text-white">{pokemonSingle.flavorText}</h4>
                        <div className="py-5"></div>
                        <div className="flex justify-around bg-slate-100 rounded-3xl">
                        <div>
                            <h2 className="font-bold">Info</h2>
                            <div className="py-3"></div>
                            <h3 className="font-semibold">ID: <span className="transition-colors hover:text-green-500">{pokemonSingle.id}</span></h3>
                            <div className="py-3"></div>
                            <h3 className="font-semibold">Height: <span className="transition-colors hover:text-green-500">{pokemonSingle.height}</span></h3>
                            <div className="py-3"></div>
                            <h3 className="font-semibold">Weight: <span className="transition-colors hover:text-green-500">{pokemonSingle.weight}</span></h3>
                        </div>
                        <div className="py-5"></div>
                        <div>
                            <h3 className="font-bold">Types</h3>
                            <ul>
                                {pokemonSingle.types.map(type => <li key={type.slot}><span className="transition-colors hover:text-green-500 font-semibold">{type.type.name}</span></li>)}
                            </ul>
                        </div>
                        <div className="py-5"></div>
                        <div>
                            <h2 className="font-bold">Stats</h2>
                            <ul>
                                {pokemonSingle.stats.map(stat => <li key={stat.stats}><span className="font-semibold">{stat.stat.name}</span> : <span className="transition-colors hover:text-green-500">{stat.base_stat}</span></li>)}
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="visible lg:hidden flex-col justify-evenly">
                    <div className="max-w-md m-auto">
                        <img src={pokemonSingle.sprites.other.home.front_default} alt={pokemonSingle.name} className="bg-slate-100 rounded-3xl transition hover:bg-green-500 shadow-2xl"></img>
                    </div>
                    <div className="py-6"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">About</h2>
                        <h4 className="text-xl text-white">{pokemonSingle.flavorText}</h4>
                        <div className="py-5"></div>
                        <div className="flex justify-around bg-slate-100 rounded-3xl">
                        <div>
                            <h2 className="font-bold">Info</h2>
                            <div className="py-3"></div>
                            <h3 className="font-semibold">ID: <span className="transition-colors hover:text-green-500">{pokemonSingle.id}</span></h3>
                            <div className="py-3"></div>
                            <h3 className="font-semibold">Height: <span className="transition-colors hover:text-green-500">{pokemonSingle.height}</span></h3>
                            <div className="py-3"></div>
                            <h3 className="font-semibold">Weight: <span className="transition-colors hover:text-green-500">{pokemonSingle.weight}</span></h3>
                        </div>
                        <div className="py-5"></div>
                        <div>
                            <h3 className="font-bold">Types</h3>
                            <ul>
                                {pokemonSingle.types.map(type => <li key={type.slot}><span className="transition-colors hover:text-green-500 font-semibold">{type.type.name}</span></li>)}
                            </ul>
                        </div>
                        <div className="py-5"></div>
                        <div>
                            <h2 className="font-bold">Stats</h2>
                            <ul>
                                {pokemonSingle.stats.map(stat => <li key={stat.stats}><span className="font-semibold">{stat.stat.name}</span> : <span className="transition-colors hover:text-green-500">{stat.base_stat}</span></li>)}
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="py-5"></div>
                </div>
            </div> }
        </div>
    )
}
export default PokeInformation