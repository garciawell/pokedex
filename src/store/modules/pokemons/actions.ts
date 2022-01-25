import { IPokeModel } from './models';

export enum PokeActionTypes {
  GET_POKE = 'pokemon/GET_POKE',
  GET_POKE_SUCCESS = 'pokemon/GET_POKE_SUCCESS',
  GET_POKE_FAILURE = 'pokemon/GET_POKE_FAILURE',

  SEARCH_POKE = 'pokemon/SEARCH_POKE',
  SEARCH_POKE_SUCCESS = 'pokemon/SEARCH_POKE_SUCCESS',
  SEARCH_POKE_FAILURE = 'pokemon/SEARCH_POKE_FAILURE',

  GET_POKE_INF = 'pokemon/GET_POKE_INF',
}

interface IGetPoke {
  type: PokeActionTypes.GET_POKE;
  payload: number;
}

interface IGetPokeSuccess {
  type: PokeActionTypes.GET_POKE_SUCCESS;
  payload: {
    data: IPokeModel[];
    pagination: number;
  };
}

interface IGetPokeFailure {
  type: PokeActionTypes.GET_POKE_FAILURE;
}

interface ISearchPoke {
  type: PokeActionTypes.SEARCH_POKE;
  payload: string;
}

interface ISearchPokeSuccess {
  type: PokeActionTypes.SEARCH_POKE_SUCCESS;
  payload: IPokeModel;
}
interface ISearchPokeFailure {
  type: PokeActionTypes.SEARCH_POKE_FAILURE;
}

interface IGetPokeInf {
  type: PokeActionTypes.GET_POKE_INF;
  payload: {
    id: number | string;
  };
}

export const Creators = {
  getPokes(value: number): IGetPoke {
    return {
      type: PokeActionTypes.GET_POKE,
      payload: value,
    };
  },
  getPokesSuccess(data: IPokeModel[], pagination: number): IGetPokeSuccess {
    return {
      type: PokeActionTypes.GET_POKE_SUCCESS,
      payload: { data, pagination },
    };
  },
  getPokesFailure(): IGetPokeFailure {
    return {
      type: PokeActionTypes.GET_POKE_FAILURE,
    };
  },

  searchPoke(data: string): ISearchPoke {
    return {
      type: PokeActionTypes.SEARCH_POKE,
      payload: data,
    };
  },
  searchPokeSuccess(data: IPokeModel): ISearchPokeSuccess {
    return {
      type: PokeActionTypes.SEARCH_POKE_SUCCESS,
      payload: data,
    };
  },
  searchPokeFailure(): ISearchPokeFailure {
    return {
      type: PokeActionTypes.SEARCH_POKE_FAILURE,
    };
  },
  getInfPoke(id: number | string): IGetPokeInf {
    return {
      type: PokeActionTypes.GET_POKE_INF,
      payload: { id },
    };
  },
};

export type IPokeAction =
  | IGetPoke
  | IGetPokeSuccess
  | IGetPokeFailure
  | ISearchPokeSuccess
  | ISearchPoke
  | ISearchPokeFailure
  | IGetPokeInf;
