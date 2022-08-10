import {ActionTypes} from './types'
import { service } from "../services/ContactsServices";
import { IDataFromContacts, IUserByID } from '../interfaces/interfaces';

const baseURL:string = '/contacts'

export const getAllContacts = ( page=1, perPage=20):any => async (dispatch:any, getState: any)=> {
  const {data}: IDataFromContacts = await service.get(`${baseURL}?page=${page}&perPage=${perPage}`);
  dispatch({
    type: ActionTypes.GET_ALL_CONTACTS, 
    contactsArray: data.results, 
    currentPage: data.currentPage,
    perPage: data.perPage
  })
}

export const getContactById = (id: number):any=> async (dispatch:any)=> {
  const {data}: IUserByID = await service.get(`/contacts/${id}`);
  // console.log(data, `${ActionTypes.GET_CONTACT_BY_ID}`)
  dispatch({type: ActionTypes.GET_CONTACT_BY_ID, payload: data});
}
