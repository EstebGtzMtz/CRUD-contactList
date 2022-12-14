import { IAction} from "../interfaces/interfaces";
import {combineReducers} from 'redux'
import { ActionTypes } from "./types";

const initialState = {
  fetching: false,
  contactsList:[],
  currentPage:1,
  perPage: 1,
  currentContact: {},
  totalPages:0
}

const contactReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CONTACT_BY_ID:
      return {
        ...state,
        currentContact: action.currentContact
      }
    case ActionTypes.GET_CONTACT_BY_ID:
      return {
        ...state,
        currentContact: action.currentContact
      }
    case ActionTypes.DELETE_CONTACT_BY_ID:
      return {...state};
    case ActionTypes.GET_ALL_CONTACTS:
        return {
          ...state, 
          fetching: true
        }
    case ActionTypes.GET_ALL_CONTACTS_SUCCESS:
      return {
        contactsList: action.contactsArray, 
          currentPage: action.currentPage,
          perPage: action.perPage,
          fetching: action.fetching,
          totalPages: action.totalPages
      }
    default:
      return {...state}
  }
}

const reducers = combineReducers({
  contacts:contactReducer
})

export default reducers;