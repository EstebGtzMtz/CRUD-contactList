import { Pagination, Stack } from '@mui/material'
import { useEffect } from 'react'
import { IGetContactList } from '../interfaces/responses'
import { getContactsList } from '../services/ContactsServices'

const Paginator = () => {

  const getContacts = async (page = 1) => {
    const {results}:IGetContactList = await getContactsList(page);
    console.log(results)
  }

  const getContactsByPage = async (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page)
    const {results}:IGetContactList = await getContactsList(page);
    console.log(results)
  }

  return (
    <Stack spacing={2}>
      <Pagination count={77} variant="outlined" color="secondary" size='large' onChange={getContactsByPage}/>
    </Stack>
  )
}

export default Paginator