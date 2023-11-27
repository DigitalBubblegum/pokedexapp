import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const getAllPokemon = async() => {
    const response = await axios.get(`${baseUrl}?limit=151`)
    // console.log(response.data)
    return response.data
}

const findSinglePokemon = async(searchVal) => {
    try{
        const response = await axios.get(`${baseUrl}${searchVal}`)
        const speciesInfo = await axios.get(response.data.species.url)
        const flavorText = speciesInfo.data.flavor_text_entries[0].flavor_text
        return {...response.data,flavorText:flavorText}
    }
    catch(error){
        // console.log(error.response.data)
        return error.response.data
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllPokemon,findSinglePokemon }