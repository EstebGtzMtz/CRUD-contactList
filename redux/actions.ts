import {ActionTypes} from './types'
import { service } from "../services/ContactsServices";
import { IDataFromContacts, INewContactSubmit, IUserByID } from '../interfaces/interfaces';

const baseURL:string = '/contacts'

export const getAllContacts = ( page=150, perPage=10):any => async (dispatch:any)=> {
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
    console.log(error)
  }
}

export const getContactById = (id:string|undefined) => async(dispatch:any) => {
  try {
    // dispatch({
    //   type:ActionTypes.GET_CONTACT_BY_ID
    // })
    const {data}: IUserByID = await service.get(`${baseURL}/${id}`);
    dispatch({
      type: ActionTypes.GET_CONTACT_BY_ID,
      currentContact: data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteUserById = (id:string) => async (dispatch:any) => {
  try {
    await service.delete(`${baseURL}/${id}`);
    dispatch({
      type: ActionTypes.DELETE_CONTACT_BY_ID,
    })
  } catch (error) {
    console.log({error})
  }
}

export const updateUserById = (id:string, infoToUpdate: INewContactSubmit ) => async (dispatch: any) => {
  try {
    const {data}:IUserByID = await service.put(`${baseURL}/${id}`, infoToUpdate);
    dispatch({
      type: ActionTypes.UPDATE_CONTACT_BY_ID,
      currentContact: data
    })
  } catch (error) {
    console.log(error)
  }
}