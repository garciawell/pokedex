const SharedActionTypes =  {
  HANDLE_MODAL: 'pokemon_inf/HANDLE_MODAL',
}


export const Creators = {
  handleModal(value) {
    return {
      type: SharedActionTypes.HANDLE_MODAL,
      payload: value,
    };
  },
};
