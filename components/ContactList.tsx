import { Stack } from '@mui/material';
import { connect } from 'react-redux';
import { IContacts, IContactsResults, IContactsState, IGetContactList } from '../interfaces/interfaces';
import ContactCard from './ContactCard/ContactCard';
import Paginator from './Paginator';


const ContactList = ({contactsList}:IContacts) => {

  console.log(contactsList)

  return (
    <Stack direction="column" className='header'>
      { contactsList ? contactsList.map((el:IContactsResults)=>(
          <ContactCard key={el.id} id={el.id} firstName={el.firstName} lastName={el.lastName} phone={el.phone}/>
        )) : <h1>loading...</h1>
      }
      <div className='row-center-element'>
        <Paginator />
      </div>
    </Stack>
  )
}

const mapStateToProps = (state:IContactsState) => {
  return {
    contactsList: state.contacts.contactsList
  }
}

export default connect(mapStateToProps)(ContactList)