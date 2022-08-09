import axios from 'axios';
import { errorMonitor } from 'stream';
import { IDataFromContacts, IDataFullResponse, INewContactSubmit } from '../interfaces/responses';

const baseURL: string = 'https://bkbnchallenge.herokuapp.com';

const service = axios.create({
  baseURL
})

export const getContactsList = async (page:number) => {
  const {data}: IDataFromContacts = await service.get(`${baseURL}/contacts?page=${page}&perPage=20`);
  return data;
}

export const createNewContact = async (newContact:INewContactSubmit) => {
  try {
    const {data}:IDataFullResponse = await service.post(`${baseURL}/contacts`, newContact);
    return data
  } catch (error) {
    return error.response.data.message
  }
}