import axios from 'axios';
import { IDataFromContacts, IDataFullResponse, INewContactSubmit, IUserByID } from '../interfaces/interfaces';

export const baseURL: string = 'https://bkbnchallenge.herokuapp.com';

export const service = axios.create({
  baseURL
});

export const createNewContact = async (newContact:INewContactSubmit) => {
  try {
    const {data}:IDataFullResponse = await service.post(`${baseURL}/contacts`, newContact);
    return data;
  } catch (error:any) {
    return error.response.data.message
  }
}