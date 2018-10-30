import moment from "moment";

const initialState = {
  where: null,
  guests: {
    adults: 0,
    children: 0,
    total: 0,
  },
  startDate: null,
  endDate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "search/SET_LOCATION":
      return { ...state };
    case "search/SET_END_DATE": {
      return { ...state, endDate: action.payload.endDate };
    }
    case "search/SET_START_DATE": {
      return { ...state, startDate: action.payload.startDate};
    }
    default:
      return state;
  }
};
