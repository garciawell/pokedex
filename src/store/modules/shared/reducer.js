import produce from 'immer';
import { SharedActionTypes } from './actions';


export const INITIAL_STATE_SHARED = {
  modal: false,
};

export default function sharedReducer(
  state = INITIAL_STATE_SHARED,
  action,
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
