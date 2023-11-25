const Pokedex = ({handleClick,pokemon}) => {
    return (
      <div className="pokedex">
        <div className="screen">
          <img src="pokemon_image.png" alt="Pokemon" />
        </div>
        <div className="controls">
          <button className="fetch" onClick={handleClick}>
            Click me
          </button>
        </div>
        <ul>
          {/* {logger.info(typeof pokemon)} */}
          {pokemon.map((po) => (
            <li>{po.name}</li>
          ))}
        </ul>
      </div>
    );

}
export default Pokedex