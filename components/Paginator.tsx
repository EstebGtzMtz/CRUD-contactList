import { MenuItem, Pagination, Select, SelectChangeEvent, Stack } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IContacts, IContactsState, IGetContactList } from '../interfaces/interfaces'
import { getAllContacts } from '../redux/actions'
import { getContactsList } from '../services/ContactsServices'

const Paginator = () => {
  const dispatch = useDispatch()
  
  const getContactsByPage = async (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(getAllContacts(page))
  }

  return (
    <Stack spacing={2}>
      <Pagination count={77} variant="outlined" color="secondary" size='large' onChange={getContactsByPage}/>
    </Stack>
  )
}

export default Paginator;