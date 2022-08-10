import { IAction, IDataFromContacts } from "../interfaces/interfaces";
import {combineReducers} from 'redux'

let initialStateContacts: IDataFromContacts

const contactReducer = (state:IDataFromContacts, action: IAction) => {
  switch (action.type) {
    case 'GET_ALL_CONTACTS':
        return state;
      break;
    default:
      return state
  }
}

const reducers = combineReducers({
  contacts:contactReducer
})

export default reducers;