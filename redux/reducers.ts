import { IAction, IDataFromContacts } from "../interfaces/interfaces";
import {combineReducers} from 'redux'
import { ActionTypes } from "./types";
import { FaceRetouchingNatural } from "@mui/icons-material";

const initialState = {
  fetching: false,
  contactsList:[],
  currentPage:1,
  perPage: 1,
  currentContact: {}
}

const contactReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CONTACT_BY_ID:
      return {
        ...state,
        currentContact: action.currentContact
      }
    // case GET_CONTACT_BY_ID_SUCCESS:
    //   return{}
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
          fetching: action.fetching
      }
    default:
      return {...state}
  }
}

const reducers = combineReducers({
  contacts:contactReducer
})

export default reducers;