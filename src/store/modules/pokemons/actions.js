
const PokeActionTypes =  {
  GET_POKE: 'pokemon/GET_POKE',
  GET_POKE_SUCCESS: 'pokemon/GET_POKE_SUCCESS',
  GET_POKE_FAILURE: 'pokemon/GET_POKE_FAILURE',

  SEARCH_POKE: 'pokemon/SEARCH_POKE',
  SEARCH_POKE_SUCCESS: 'pokemon/SEARCH_POKE_SUCCESS',
  SEARCH_POKE_FAILURE: 'pokemon/SEARCH_POKE_FAILURE',

  GET_POKE_INF: 'pokemon/GET_POKE_INF',
}


export const Creators = {
  getPokes(value) {
    return {
      type: PokeActionTypes.GET_POKE,
      payload: value,
    };
  },
  getPokesSuccess(data, pagination) {
    return {
      type: PokeActionTypes.GET_POKE_SUCCESS,
      payload: { data, pagination },
    };
  },
  getPokesFailure() {
    return {
      type: PokeActionTypes.GET_POKE_FAILURE,
    };
  },

  searchPoke(data) {
    return {
      type: PokeActionTypes.SEARCH_POKE,
      payload: data,
    };
  },
  searchPokeSuccess(data) {
    return {
      type: PokeActionTypes.SEARCH_POKE_SUCCESS,
      payload: data,
    };
  },
  searchPokeFailure() {
    return {
      type: PokeActionTypes.SEARCH_POKE_FAILURE,
    };
  },
  getInfPoke(id) {
    return {
      type: PokeActionTypes.GET_POKE_INF,
      payload: { id },
    };
  },
};