import { takeLatest, put } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import api from 'services/api';
import { PokeActionTypes, Creators as PokemonsActions } from '../actions';
import saga, { getPokes, searchPokes } from '../saga';

const gen = saga();
const apiMock = new MockAdapter(api);

let instance: any;
let mock: any;

beforeEach(function () {
  instance = axios.create();
  mock = new MockAdapter(instance);
});

describe('Reducer GET Pokemon', () => {
  it('Should be able to call getPokes saga if call action GET_POKE', () => {
    expect(gen.next().value).toEqual(
      takeLatest(PokeActionTypes.GET_POKE, getPokes),
    );
  }, 3000);

  it('Should be able to failure request', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/pokemon?offset=2').reply(400, ['finalidade']);

    await runSaga({ dispatch }, getPokes).toPromise();

    expect(dispatch).toHaveBeenCalledWith(PokemonsActions.getPokesFailure());
  });
});

describe('Reducer Search Pokemon', () => {
  it('Should be able to call searchPokes saga if call action SEARCH_POKES', () => {
    expect(gen.next().value).toEqual(
      takeLatest(PokeActionTypes.SEARCH_POKE, searchPokes),
    );
  }, 3000);

  it('Should be able to success request', async () => {
    const dispatch = jest.fn();

    const action = {
      id: 2,
      name: 'teste',
      sprites: {
        front_default: 'url',
      },
      types: [
        {
          slot: 33,
          type: {
            name: 'rock',
            url: 'url',
          },
        },
      ],
      stats: undefined,
      abilities: [
        {
          ability: {
            name: 'name',
          },
        },
      ],
    };

    apiMock.onGet('pokemon/2').reply(200, action);

    const payloadSaga = {
      payload: 2,
    };

    await runSaga({ dispatch }, searchPokes, payloadSaga).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      PokemonsActions.searchPokeSuccess({
        id: 2,
        name: 'teste',
        img: 'url',
        types: [
          {
            slot: 33,
            type: {
              name: 'rock',
              url: 'url',
            },
          },
        ],
        stats: undefined,
        abilities: [
          {
            ability: {
              name: 'name',
            },
          },
        ],
      }),
    );
  });

  it('Should be able to failure request', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('pokemon/2').reply(400, ['finalidade']);

    await runSaga({ dispatch }, searchPokes).toPromise();

    expect(dispatch).toHaveBeenCalledWith(PokemonsActions.searchPokeFailure());
  });
});
