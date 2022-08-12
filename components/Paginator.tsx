import { Pagination, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { IContactsState } from '../interfaces/interfaces'
import { getAllContacts } from '../redux/actions'
import { useState } from 'react';

const Paginator = () => {
  const dispatch = useDispatch()
  let currentPage = useSelector((state:IContactsState) => state?.contacts.currentPage);
  const totalPages = useSelector((state:IContactsState) => state?.contacts.totalPages);

  const [page, setPage] = useState(currentPage);
  

  const getContactsByPage = async (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(getAllContacts(page))
    setPage(page)
  }

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages ? totalPages : 1} page={page} variant="outlined" color="secondary" onChange={getContactsByPage}/>
    </Stack>
  )
}

export default Paginator;