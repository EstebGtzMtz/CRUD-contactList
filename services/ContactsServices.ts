import axios from 'axios';
import { IDataFromContacts } from '../interfaces/responses';

const baseURL: string = 'https://bkbnchallenge.herokuapp.com';

const service = axios.create({
  baseURL
})

export const getContactsList = async (page:number) => {
  const {data}: IDataFromContacts = await service.get(`${baseURL}/contacts?page=${page}&perPage=20`);
  return data
}