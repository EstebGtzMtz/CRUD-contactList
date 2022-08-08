import axios from 'axios';
import { IGetContactList } from '../interfaces/responses';

const baseURL: string = 'https://bkbnchallenge.herokuapp.com/';

const service = axios.create({
  baseURL
})

export const getContactsList = async () => {
  const response: IGetContactList = await service.get(`${baseURL}`);
  console.log(response)
}