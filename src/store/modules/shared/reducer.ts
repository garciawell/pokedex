import produce from 'immer';
import { SharedActionTypes, ISharedAction } from './actions';

export interface ISharedState {
  modal: boolean;
}

export const INITIAL_STATE_SHARED: ISharedState = {
  modal: false,
};

export default function sharedReducer(
  state: ISharedState = INITIAL_STATE_SHARED,
  action: ISharedAction,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SharedActionTypes.HANDLE_MODAL:
        draft.modal = action.payload;
        break;
      default:
    }
  });
}
