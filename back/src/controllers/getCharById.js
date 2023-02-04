const { default: axios } = require("axios");

const getCharById = (id) => {

    const results = axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    
    results
      .then(dataRaw => {
        const { data } = dataRaw;
        return {
          id: data.id,
          name: data.name,
          species: data.species,
          gender: data.gender,
          image: data.image,
        }
      })
      .catch(err => err)

      return results

}


module.exports = getCharById

