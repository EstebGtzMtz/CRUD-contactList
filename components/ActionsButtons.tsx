import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';import { IContactsResults } from '../interfaces/responses';
import Link from 'next/link';
;

const ActionsButtons = ({id}:IContactsResults) => {
  return (
    <div className='contact-action-buttons'>
      <Link href={`UpdateContact/${id}`}>
        <EditIcon sx={{ fontSize: 40, color:'white' }} className='pointer-mouse'/>
      </Link>
      <DeleteIcon sx={{ fontSize: 40, color:'white' }} className='pointer-mouse' />
    </div>
  )
}

export default ActionsButtons