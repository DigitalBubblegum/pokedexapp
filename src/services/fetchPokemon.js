import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
const getAllPokemon = async() => {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
}

export default {getAllPokemon}