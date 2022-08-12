import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import ContactList from '../components/ContactList';
import Header from '../components/Header';

const index = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Header title='CONTACT LIST'/>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default index