import {ActionTypes} from './types'
import { service } from "../services/ContactsServices";
import { IContacts, IDataFromContacts, IUserByID } from '../interfaces/interfaces';

const baseURL:string = '/contacts'

export const getAllContacts = ( page=1, perPage=20):any => async (dispatch:any)=> {
  try {
    dispatch({
      type:ActionTypes.GET_ALL_CONTACTS
    })
    const {data}: IDataFromContacts = await service.get(`${baseURL}?page=${page}&perPage=${perPage}`);
    dispatch({
      type: ActionTypes.GET_ALL_CONTACTS_SUCCESS, 
      contactsArray: data.results, 
      currentPage: data.currentPage,
      perPage: data.perPage,
      fetching: false
    }) 
  } catch (error) {
    
  }
}

export const deleteUserById = (id:string, page=78, perPage=5) => async (dispatch:any, getState:IContacts) => {
  console.log(getState)
  try {
    await service.delete(`${baseURL}/contacts/${id}`);
    const {data}: IDataFromContacts = await service.get(`${baseURL}?page=${page}&perPage=${perPage}`);
    dispatch({
      type: ActionTypes.DELETE_CONTACT_BY_ID,
      contacstArray: data.results
    })
  } catch (error) {
    
  }

}

export const getContactById = (id: number):any=> async (dispatch:any)=> {
  const {data}: IUserByID = await service.get(`/contacts/${id}`);
  // console.log(data, `${ActionTypes.GET_CONTACT_BY_ID}`)
  dispatch({type: ActionTypes.GET_CONTACT_BY_ID, payload: data});
}
