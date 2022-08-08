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
  firstName: string,
  lastName: string,
  email?: string,
  phone: string
}

