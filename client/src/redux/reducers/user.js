const initialState = {
  username: null,
  email: null,
  first_name: null,
  last_name: null,
  rewards: {},
  bookings: [],
  access_token: null,
  isLoggedIn: false,
  id_token: null,
  refresh_token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        email: action.payload.email,
        access_token: action.payload.access_token,
        id_token: action.payload.id_token,
        refresh_token: action.payload.refresh_token
      };
    case "user/LOG_OUT":
      return {
        username: null,
        email: null,
        first_name: null,
        last_name: null,
        rewards: {},
        bookings: [],
        access_token: null,
        isLoggedIn: false,
        id_token: null,
        refresh_token: null
      };
    default:
      return state;
  }
};
