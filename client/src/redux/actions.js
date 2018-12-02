import {instance} from '../Axios'
export const INCREMENT_ADULT = 'INCREMENT_ADULT';
export const DECREMENT_ADULT = 'DECREMENT_ADULT';

export const INCREMENT_CHILDREN = 'INCREMENT_CHILDREN';
export const DECREMENT_CHILDREN = 'DECREMENT_CHILDREN';

export const search = (checkIn, checkOut, numberOfGuests, postalCode) => {
  return async (dispatch) => {
    await instance.get('search', {params: {
      checkIn: checkIn,
      checkOut: checkOut,
      numberOfGuest: numberOfGuests,
      postalCode: postalCode
    } }).then(response => {
      dispatch({
        type: 'SEARCH',
        payload: response.data.data
      })
    })
  }
}

export const getHotelData = (id) => {
  return async (dispatch) => {
    await instance.get('hotel', {
      params: {id: id}
    }).then(response => {
      dispatch({
        type: 'search/GET_HOTEL_DATA',
        payload: response.data
      })
    })
  }
}