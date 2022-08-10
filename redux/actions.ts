import { GET_ALL_CONTACTS } from "./types"
import {Dispatch} from 'redux';

export const getAllContacts = (id: string)=>{
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_ALL_CONTACTS,
      payload: id
    })
  }
}