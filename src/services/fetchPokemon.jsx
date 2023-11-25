import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const getAllPokemon = async() => {
    const response = await axios.get(`${baseUrl}?limit=151`)
    // console.log(response.data)
    return response.data
}

const findSinglePokemon = async(searchVal) => {
    const response = await axios.get(`${baseUrl}${searchVal}`)
    return response.data
}

export default {getAllPokemon,findSinglePokemon}