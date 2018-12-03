import {instance} from '../Axios'
import store from './store'
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
      postalCode: postalCode,
        isHackySearch: 'true',
    } }).then(response => {
      dispatch({
        type: 'SEARCH',
        payload: response.data.data
      })
    })
  }
}

export const getHotelData = (id) => {
  return async (dispatch, getState) => {
    await instance.get('hotel', {
      params: {id: id}
    }).then(response => {
      dispatch({
        type: 'search/GET_HOTEL_DATA',
        payload: response.data.data
      });
    }).then(()=>getState().search.hotelData.rooms.forEach((room)=>{
      store.dispatch(getRoomData(room.N, id))
    }))
  }
}

export const getRoomData = (id, hotel_id) =>{
  return async (dispatch) => {
    await instance.get('room',{
      params: {id: id, hotel_id: hotel_id}
    }).then(response=>{
      if(response.status === 200){
        dispatch({
          type: 'search/GET_ROOM_DATA',
          payload: response.data.data
        })
      }
    })
  }
}
