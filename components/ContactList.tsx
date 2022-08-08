import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { IContactsResults, IGetContactList } from '../interfaces/responses';
import { getContactsList } from '../services/ContactsServices';
import ContactCard from './ContactCard/ContactCard';
import Paginator from './Paginator';

const ContactList = () => {
  
  const [contactList, setContactList] = useState<IContactsResults[]>([])

  useEffect(() => {
    getContacts()
  }, [])

  const getContacts = async () => {
    const {results}:IGetContactList = await getContactsList(1);
    console.log(results)
    setContactList(results)
  }

  return (
    <Stack direction="column" className='header'>
      {
        contactList.map((el:IContactsResults)=>(
          <ContactCard key={el.id} firstName={el.firstName} lastName={el.lastName} phone={el.phone}/>
        ))
      }
      <div className='row-center-element'>
        <Paginator />
      </div>
    </Stack>
  )
}

export default ContactList