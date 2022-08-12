import { Pagination, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { IContactsState } from '../interfaces/interfaces'
import { getAllContacts } from '../redux/actions'

const Paginator = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state:IContactsState) => state?.contacts.currentPage);
  const totalPages = useSelector((state:IContactsState) => state?.contacts.totalPages);

  const getContactsByPage = async (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(getAllContacts(page))
  }

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} variant="outlined" color="secondary" size='large' onChange={getContactsByPage}/>
    </Stack>
  )
}

export default Paginator;