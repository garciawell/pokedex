import sharedReducer, { INITIAL_STATE_SHARED } from '../reducer';
import { Creators as SharedActions } from '../actions';

describe('Reucer Shared', () => {
  it('HANDLE MODAL', () => {
    const state = sharedReducer(
      INITIAL_STATE_SHARED,
      SharedActions.handleModal(true),
    );

    expect(state).toStrictEqual({
      modal: true,
    });
  });
});
