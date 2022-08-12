export interface IDataFromContacts{
  data:IGetContactList
}

export interface IGetContactList {
  count: number,
  currentPage:number,
  perPage: number,
  results: IContactsResults[]
}

export interface IContactsResults {
  id?: string,
  firstName?: string | undefined,
  lastName?: string,
  email?: string,
  phone?: string
}

export interface INewContactSubmit {
  firstName?: string | undefined,
  lastName?: string | undefined,
  email?: string,
  phone?: string
}

export interface IDataFullResponse{
  data?: IContactCompleteResponse
}

export interface IContactCompleteResponse {
  id?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  phone?: string,
  message?:string
}

export interface IHeaderProps {
  title:string
}

export interface IUserByID {
  data: IContactsResults
}

export interface IContact{
  contact: IContactsResults,
  id:string
}

export interface IAction {
  type: string,
  contactsArray: IContactsResults[]
  currentPage: number
  perPage: number
  fetching: boolean
  currentContact: IContactsResults
}

export interface IActionsTypes {
  GET_ALL_CONTACTS: string,
  CURRENT_PAGE?: string,
  GET_CONTACT_BY_ID: string,
  DELETE_CONTACT_BY_ID:string,
  GET_ALL_CONTACTS_SUCCESS: string,
  UPDATE_CONTACT_BY_ID: string,
  GET_CONTACT_BY_ID_SUCCESS: string
}


export interface IContactsState {
  contacts: IContacts
}

export interface IContacts {
  fetching: boolean,
  currentPage: number,
  perPage: number,
  contactsList: IContactsResults[]

}


export interface IContactFormProps {
  contact?: INewContactSubmit,
  deleteUserById?: any,
  updateUserById?:any,
  id: string
}