import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';import { IContactsResults } from '../interfaces/interfaces';
import Link from 'next/link';
import { Button } from '@mui/material';
;

const ActionsButtons = ({id}:IContactsResults) => {
  return (
      <Link href={`UpdateContact/${id}`}>
        {/* <div className='contact-action-buttons pointer-mouse'> */}
        <Button variant="contained" size="large">Edit Contact Info</Button>
            {/* <EditIcon sx={{ fontSize: 30, color:'white' }} className='pointer-mouse'/>
            <h2 className='edit-info-text'>Edit Contact Info</h2> */}
        {/* </div> */}
      </Link>
  )
}

export default ActionsButtons