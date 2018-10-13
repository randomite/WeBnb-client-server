const initialState = {
  user_id: null,
  email: null,
  first_name: null,
  last_name: null,
  rewards: {},
  bookings: [],
  token: null,
  isLogedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'user/LOG_IN':
      return {...state, isLogedIn: true}
    default:
      return state;
  }
};
