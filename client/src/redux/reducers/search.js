import {
  INCREMENT_ADULT,
  DECREMENT_ADULT,
  INCREMENT_CHILDREN,
  DECREMENT_CHILDREN
} from "../actions";

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
  endDate: null,
  searchData: null,
  zipcode: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ADULT:
      return {
        ...state,
        guests: {
          ...state.guests,
          adults: state.guests.adults + 1,
          total: state.guests.total + 1
        }
      };
    case DECREMENT_ADULT:
      return {
        ...state,
        guests: {
          ...state.guests,
          adults: state.guests.adults - 1,
          total: state.guests.total - 1
        }
      };
    case INCREMENT_CHILDREN:
      return {
        ...state,
        guests: {
          ...state.guests,
          children: state.guests.children + 1,
          total: state.guests.total + 1
        }
      };
    case DECREMENT_CHILDREN:
      return {
        ...state,
        guests: {
          ...state.guests,
          children: state.guests.children - 1,
          total: state.guests.total - 1
        }
      };
    case "search/SET_LOCATION":
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        address: action.payload.address,
        zipcode: action.payload.zipcode,
      };
    case "search/SET_END_DATE": {
      return { ...state, endDate: action.payload.endDate };
    }
    case "search/SET_START_DATE": {
      return { ...state, startDate: action.payload.startDate };
    }
    case "search/SET_DATES": {
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      };
    }
    case "search/SET_ADDRESS": {
      return {
        ...state,
        address: action.payload.address
      }
    }
    case 'SEARCH': {
      return {
        ...state,
        searchData: action.payload
      }
    }
    default:
      return state;
  }
};
