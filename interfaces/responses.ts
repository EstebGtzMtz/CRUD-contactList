export interface IGetContactList {
  count: number,
  currentPage:number,
  results: IContactsResulst[]
}

export interface IContactsResulst {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string
}