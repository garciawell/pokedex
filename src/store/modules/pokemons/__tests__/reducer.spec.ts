import pokemonsReducer, { INITIAL_STATE_POKE } from '../reducer';
import { Creators as PokeActions } from '../actions';
import { ApiStatus } from '../models';

describe('Reducer Pokemon', () => {
  it('GET_POKE', () => {
    const state = pokemonsReducer(INITIAL_STATE_POKE, PokeActions.getPokes(1));

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      loadingStatus: ApiStatus.LOADING,
      isSearchFilled: false,
      error: '',
    });
  });

  it('GET_POKE_SUCCESS', () => {
    const payload = [
      {
        id: 1,
        name: 'Pokemon',
        url: 'url',
        img: 'img',
        types: [],
        stats: [],
        abilities: [],
      },
    ];

    const state = pokemonsReducer(
      INITIAL_STATE_POKE,
      PokeActions.getPokesSuccess(payload, 1),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      pokes: payload,
      pages: 1,
      loadingStatus: ApiStatus.LOADED,
    });
  });

  it('GET_POKE_FAILURE', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKE,
      PokeActions.getPokesFailure(),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      loadingStatus: ApiStatus.LOADED,
      pokes: [],
      error: 'Not Found',
    });
  });

  it('SEARCH_POKE', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKE,
      PokeActions.searchPoke('qwer'),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      loadingStatus: ApiStatus.LOADING,
      isSearchFilled: true,
      error: '',
    });
  });
  it('SEARCH_POKE', () => {
    const payload = {
      id: 1,
      name: 'Pokemon',
      url: 'url',
      img: 'img',
      types: [],
      stats: [],
      abilities: [],
    };
    const state = pokemonsReducer(
      INITIAL_STATE_POKE,
      PokeActions.searchPokeSuccess(payload),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      loadingStatus: ApiStatus.LOADED,
      pokes: [payload],
    });
  });

  it('SEARCH_POKE_FAILURE', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKE,
      PokeActions.searchPokeFailure(),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      loadingStatus: ApiStatus.LOADED,
      pokes: [],
      error: 'Not Found',
    });
  });

  it('GET_POKE_INF', () => {
    const payload = [
      {
        id: 1,
        name: 'Pokemon',
        url: 'url',
        img: 'img',
        types: [],
        stats: [],
        abilities: [],
      },
    ];

    const state = pokemonsReducer(
      {
        ...INITIAL_STATE_POKE,
        pokes: payload,
        currentPokemon: {},
      },
      PokeActions.getInfPoke(1),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKE,
      pokes: payload,
      currentPokemon: payload[0],
    });
  });
});
