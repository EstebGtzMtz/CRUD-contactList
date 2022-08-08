import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';;

const ActionsButtons = () => {
  return (
    <div className='contact-action-buttons'>
      <EditIcon sx={{ fontSize: 40, color:'white' }} className='pointer-mouse'/>
      <DeleteIcon sx={{ fontSize: 40, color:'white' }} className='pointer-mouse' />
    </div>
  )
}

export default ActionsButtons