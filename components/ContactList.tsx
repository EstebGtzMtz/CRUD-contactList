import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { IContactsResults, IGetContactList } from '../interfaces/interfaces';
import { getContactsList } from '../services/ContactsServices';
import ContactCard from './ContactCard/ContactCard';
import Paginator from './Paginator';

const ContactList = () => {
  
  const [contactList, setContactList] = useState<IContactsResults[]>([])

  useEffect(() => {
    const getContacts = async () => {
      const {results}:IGetContactList = await getContactsList(78);
      setContactList(results)
    }
    
    getContacts()
  }, [])


  return (
    <Stack direction="column" className='header'>
      {
        contactList.map((el:IContactsResults)=>(
          <ContactCard key={el.id} id={el.id} firstName={el.firstName} lastName={el.lastName} phone={el.phone}/>
        ))
      }
      <div className='row-center-element'>
        <Paginator />
      </div>
    </Stack>
  )
}

export default ContactList