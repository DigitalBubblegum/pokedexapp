

function App() {
  return (
    <div className="pokedex">
      <div className="screen">
        <img src="pokemon_image.png" alt="Pokemon" />
      </div>
      <div className="controls">
        <button className="prev-btn">Previous</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default App;
