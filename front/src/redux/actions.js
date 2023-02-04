export const ADD_FAVORITE =  'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE' 

export const addFavorite = (character) => ({type: ADD_FAVORITE, payload: character})
export const deleteFavorite = (characterId) => ({type: DELETE_FAVORITE, payload: characterId})
