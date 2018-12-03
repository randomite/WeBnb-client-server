const initialState = {
  room: {
    id: null,
    room_type: null,
    room_type_code: {},
    room_number: null,
    image_url: null
  },
  guests: {
      adults: 1,
      children: 0,
      total: 1
  },
  startDate: null,
  endDate: null,
  hotel_id: 1
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
        ...state, startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      }
      case "booking/SET_GUESTS":
        return {...state, guests: action.payload}
      case "booking/SET_HOTEL":
        return {
          ...state,
          hotel_id: action.payload
        };
    default:
      return state;
  }
};
