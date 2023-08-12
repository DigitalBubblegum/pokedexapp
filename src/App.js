import axios from "axios";
var url = "https://pokeapi.co/api/v2/pokemon";

const handleClick = () =>{
  const promise = axios.get(`${url}/1`)
  console.log(promise);
  const promise2 = axios.get(`${url}/2`)
  console.log(promise2)
  console.log('button clicked')
}

function App() {
  return (
    <div className="pokedex">
      <div className="screen">
        <img src="pokemon_image.png" alt="Pokemon" />
      </div>
      <div className="controls">
        <button className="prev-btn" onClick={() => handleClick()}>
          Previous
        </button>
        <button className="next-btn" onClick={() => console.log("clk")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
