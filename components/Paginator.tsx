import { MenuItem, Pagination, Select, SelectChangeEvent, Stack } from '@mui/material'
import { useState } from 'react'
import { IGetContactList } from '../interfaces/interfaces'
import { getContactsList } from '../services/ContactsServices'

const Paginator = () => {
  const [perPage, setPerPage] = useState('10');

  // const getContacts = async (page = 78) => {
  //   const {results}:IGetContactList = await getContactsList(page);
  //   console.log(results)
  // }

  const handleChange = async(event: SelectChangeEvent) => {
    setPerPage(event.target.value as string);
    console.log(event.target.value)
    // const res = await getContactsList(,perPage)
  };

  const getContactsByPage = async (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page)
    const {results}:IGetContactList = await getContactsList(page);
    console.log(results)
  }

  return (
    <Stack spacing={2}>
      <Pagination count={77} variant="outlined" color="secondary" size='large' onChange={getContactsByPage}/>
      <Select
          value={perPage}
          label="Per Page"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
    </Stack>
  )
}

export default Paginator