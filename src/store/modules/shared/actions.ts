export enum SharedActionTypes {
  HANDLE_MODAL = 'pokemon_inf/HANDLE_MODAL',
}

interface IHandleModal {
  type: SharedActionTypes.HANDLE_MODAL;
  payload: boolean;
}

export const Creators = {
  handleModal(value: boolean): IHandleModal {
    return {
      type: SharedActionTypes.HANDLE_MODAL,
      payload: value,
    };
  },
};

export type ISharedAction = IHandleModal;
