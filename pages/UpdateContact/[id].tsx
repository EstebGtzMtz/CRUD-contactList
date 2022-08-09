import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import EditContactForm from '../../components/EditContact/EditContactForm';
import EditContactHeader from '../../components/EditContact/EditContactHeader';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IContactsResults } from '../../interfaces/interfaces';
import { getContactById } from '../../services/ContactsServices';

const UpdateContact = () => {
  const router = useRouter()
  const { id } = router.query;
  const [user,setUser] = useLocalStorage('user', '')
  const [contact, setContact] = useState<IContactsResults>({})

  
  useEffect(() => {
    const getUserById = async (id:string) => {
      const res = await getContactById(id);
      setContact(res)
      await setUser(res)
    }
    id !== undefined && getUserById(String(id));
  }, [id])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} className='edit-header-background'>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <EditContactHeader 
            firstName={contact.firstName} 
            lastName={contact.lastName}
            email={contact.email}
          />
        </Grid>
        <Grid>
          <EditContactForm 
            contact={contact} id={String(id)}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default UpdateContact;