import axios from "axios";
var url = "https://pokeapi.co/api/v2/pokemon";

// const handleClick = () =>{
//   const promise = axios.get(`${url}/1`)
//   console.log(promise);
//   const promise2 = axios.get(`${url}/2`)
//   console.log(promise2)
//   console.log('button clicked')
// }
// const a1 = axios.get(`${url}/1`)
// const a2 = axios.get(`${url}/2`)
// console.log(a1)
// console.log(a2)
function App() {
  //functions
  const handleClick = () =>{
    console.log('clicked');
    const a1 = axios
      .get(`${url}/1`)
      .then((response) => {
        // const { id, name } = response.data;
        const id = response.data.id
        const name = response.data.name
        console.log(`Name: ${name}, ID: ${id}`);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    console.log(a1);
  }
  return (
    <div className="pokedex">
      <div className="screen">
        <img src="pokemon_image.png" alt="Pokemon" />
      </div>
      <div className="controls">
        <button className="fetch" onClick={handleClick}>
          Click me
        </button>
        {/* <button className="next-btn" onClick={() => console.log("clk")}>
          Next
        </button> */}
      </div>
    </div>
  );
}

export default App;
