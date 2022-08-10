import { IAction, IDataFromContacts } from "../interfaces/interfaces";
import {combineReducers} from 'redux'
import { ActionTypes } from "./types";

const initialState = {
  fetching: false,
  contactsList:[],
  currentPage:1,
  perPage: 1
}

const contactReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CONTACTS:
        return {
          ...state, 
          contactsList: action.contactsArray, 
          currentPage: action.currentPage,
          perPage: action.perPage
        }
      break;
    default:
      return {...state}
  }
}

const reducers = combineReducers({
  contacts:contactReducer
})

export default reducers;