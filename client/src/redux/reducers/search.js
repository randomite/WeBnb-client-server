import moment from "moment";

const initialState = {
  address: "",
  latitude: null,
  longitude: null,
  guests: {
    adults: 1,
    children: 0,
    total: 1
  },
  startDate: null,
  endDate: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "search/SET_LOCATION":
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        address: action.payload.address
      };
    case "search/SET_END_DATE": {
      return { ...state, endDate: action.payload.endDate };
    }
    case "search/SET_START_DATE": {
      return { ...state, startDate: action.payload.startDate };
    }
    case "search/SET_DATES": {
      return {...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      }
    }
    default:
      return state;
  }
};