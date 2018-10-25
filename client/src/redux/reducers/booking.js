const initialState = {
  room: {
    id: null,
    room_type: null,
    room_type_code: {},
    room_number: null,
    image_url: null
  },
  guests: {},
  dates: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "booking/SELECT_ROOM":
      return {
        ...state,
        room: action.payload.room
      };
    case "booking/SET_DATES":
      return {
        ...state, dates: action.payload.dates
      }
    default:
      return state;
  }
};
