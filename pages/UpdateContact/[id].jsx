import { Backdrop, CircularProgress, Container, Grid } from '@mui/material';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditContactForm from '../../components/EditContact/EditContactForm';
import EditContactHeader from '../../components/EditContact/EditContactHeader';
import { IContactsState } from '../../interfaces/interfaces';
import {getContactById} from '../../redux/actions';

const UpdateContact = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { id } = router.query;
  const contact = useSelector((state) => state?.contacts.currentContact);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    dispatch(getContactById(String(id)))
  }, [id])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} className='edit-header-background'>
        </Grid>
        {
          contact !== undefined ?
          <>
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
          </> :
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      </Grid>
    </Container>
  )
}

export default UpdateContact;