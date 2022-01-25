import produce from 'immer';
import { mockListPokemons } from 'utils/tools';
import { ApiStatus, IPokeModel, IPokeStats, IPokeAbilities } from './models';
import { IPokeAction, PokeActionTypes } from './actions';

export interface IPokemonState {
  loadingStatus: ApiStatus;
  pokes: IPokeModel[];
  pages: number;
  isSearchFilled: boolean;
  error: string;
  stats: IPokeStats[];
  abilities: IPokeAbilities[];
  currentPokemon: any;
}

export const INITIAL_STATE_POKE: IPokemonState = {
  loadingStatus: ApiStatus.LOADING,
  pokes: mockListPokemons(),
  pages: 0,
  isSearchFilled: false,
  error: '',
  stats: [],
  abilities: [],
  currentPokemon: {},
};

export default function pokemonsReducer(
  state: IPokemonState = INITIAL_STATE_POKE,
  action: IPokeAction,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PokeActionTypes.GET_POKE:
        draft.loadingStatus = ApiStatus.LOADING;
        draft.isSearchFilled = false;
        draft.error = '';
        break;
      case PokeActionTypes.GET_POKE_SUCCESS:
        draft.pokes = action.payload.data;
        draft.pages = action.payload.pagination;
        draft.loadingStatus = ApiStatus.LOADED;
        break;
      case PokeActionTypes.GET_POKE_FAILURE:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokes = [];
        draft.error = 'Not Found';
        break;

      case PokeActionTypes.SEARCH_POKE:
        draft.loadingStatus = ApiStatus.LOADING;
        draft.isSearchFilled = !!action.payload;
        draft.error = '';
        break;

      case PokeActionTypes.SEARCH_POKE_SUCCESS:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokes = [];
        draft.pokes.push(action.payload);

        break;

      case PokeActionTypes.SEARCH_POKE_FAILURE:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokes = [];
        draft.error = 'Not Found';
        break;

      case PokeActionTypes.GET_POKE_INF:
        draft.currentPokemon =
          action.payload.id === 'CLEAR'
            ? {}
            : draft.pokes.find((item) => item.id === action.payload.id);
        break;
      default:
    }
  });
}
