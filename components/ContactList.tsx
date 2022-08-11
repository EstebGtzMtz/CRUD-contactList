import { Stack } from '@mui/material';
import {  useDispatch } from 'react-redux';
import { IContacts, IContactsResults, IContactsState, IGetContactList } from '../interfaces/interfaces';
import ContactCard from './ContactCard/ContactCard';
import Paginator from './Paginator';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllContacts } from '../redux/actions';

const ContactList = () => {
  
  const dispatch = useDispatch()
  const contactsList = useSelector((state:any) => state?.contacts.contactsList);
  const isFetching = useSelector((state:any) => state?.contacts.fetching)

  useEffect(() => {
    dispatch(getAllContacts())
  }, [])
  

  return (
    <Stack direction="column" className='header'>
      { !isFetching ? contactsList.map((el:IContactsResults)=>(
          <ContactCard key={el.id} id={el.id} firstName={el.firstName} lastName={el.lastName} phone={el.phone}/>
        )) : <h1>loading ...</h1>
      }
      <div className='row-center-element'>
        {/* <Paginator /> */}
      </div>
    </Stack>
  )
}

export default ContactList