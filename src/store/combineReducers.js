import { combineReducers } from 'redux';
import pokemonsReducer, {
  IPokemonState,
  INITIAL_STATE_POKE,
} from './modules/pokemons/reducer';

import sharedReducer, {
  ISharedState,
  INITIAL_STATE_SHARED,
} from './modules/shared/reducer';



export const initialState = {
  pokemons: INITIAL_STATE_POKE,
  shared: INITIAL_STATE_SHARED,
};

export default combineReducers({
  pokemons: pokemonsReducer,
  shared: sharedReducer,
});
