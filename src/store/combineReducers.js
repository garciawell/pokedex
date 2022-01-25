import { combineReducers } from 'redux';
import pokemonsReducer, {
  INITIAL_STATE_POKE,
} from './modules/pokemons/reducer';
import sharedReducer, {
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
