const initialState = {openModal: false, modalType: 'LogIn'};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'authentication/SHOW_MODAL':
      return {...state, openModal: true, modalType: action.payload.modalType}
    case 'authentication/HIDE_MODAL':
      return {...state, openModal: false};
    default:
      return state;
  }
};
