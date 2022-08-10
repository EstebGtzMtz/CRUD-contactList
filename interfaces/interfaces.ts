export interface IDataFromContacts{
  data:IGetContactList
}

export interface IGetContactList {
  count: number,
  currentPage:number,
  results: IContactsResults[]
}

export interface IContactsResults {
  id?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  phone?: string
}

export interface INewContactSubmit {
  firstName: string,
  lastName: string,
  email: string,
  phone: string
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
  payload?: number
}