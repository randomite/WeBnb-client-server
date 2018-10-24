const initialState = {
  room: {
    id: null,
    room_type: null,
    room_type_code: null,
    room_number: null,
    image_url: null,
  },
  guests: {},
  dates: {},
}

export default (state = initialState, action) =>{
  switch (action.type) {
    case "booking/SELECT_ROOM":
      return {...state,
        room: {
          id: action.payload.room.id,
          room_type: action.payload.room.room_type,
          room_type_code: action.payload.room_type_code,
          room_number: action.payload.room.room_number,
          image_url: action.payload.room.image_url,
        },
      };
    default:
      return state;
  }
}