import { all, fork } from 'redux-saga/effects';
import pokemons from './modules/pokemons/saga';

export default function* root() {
  yield all([fork(pokemons)]);
}
