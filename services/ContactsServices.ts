import axios from 'axios';
import { IDataFromContacts, IDataFullResponse, INewContactSubmit, IUserByID } from '../interfaces/interfaces';

export const baseURL: string = 'https://bkbnchallenge.herokuapp.com';

export const service = axios.create({
  baseURL
});

export const getContactsList = async (page:number, perPage:number) => {
    const {data}: IDataFromContacts = await service.get(`${baseURL}/contacts?page=${page}&perPage=${perPage}`);
    return data;
}

export const createNewContact = async (newContact:INewContactSubmit) => {
  try {
    const {data}:IDataFullResponse = await service.post(`${baseURL}/contacts`, newContact);
    return data;
  } catch (error:any) {
    return error.response.data.message
  }
}

export const getContactById = async (id:string) => {
  const {data}: IUserByID = await service.get(`${baseURL}/contacts/${id}`);
  return data
}

export const updateUserById = async (id:string, infoToUpdate: INewContactSubmit ) => {
  const {data}:IUserByID = await service.put(`${baseURL}/contacts/${id}`, infoToUpdate);
  return data
}

export const deleteUserById = async (id:string) =>{
  const {data}:IUserByID = await service.delete(`${baseURL}/contacts/${id}`);
  return data

}