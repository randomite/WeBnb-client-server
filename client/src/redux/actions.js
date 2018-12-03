import {instance} from '../Axios'
import store from "./store";
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

export const getBookingData =()=>{
  return async (dispatch, getState) => {
    await instance.get('booking', {
      params: { user_id: getState().user.email}
    }).then(response => {
      dispatch({
        type: 'user/GET_BOOKING_DATA',
        payload: response.data.data
      })
    }).catch(e=>console.log(e))
  }
}



export const loadDataFromLocalStorage =() =>{
  return (dispatch) =>{if (localStorage.getItem("username")) {
    dispatch({
      type: "user/LOG_IN",
      payload: {
        email: localStorage.getItem("username"),
        access_token: localStorage.getItem("access_token"),
        id_token: localStorage.getItem("id_token"),
        refresh_token: localStorage.getItem("refresh_token"),
        username: localStorage.getItem("username")
      }
    })
  }}
};