import axios from 'axios';

export const baseURL: string = 'https://bkbnchallenge.herokuapp.com';

export const service = axios.create({
  baseURL
});
