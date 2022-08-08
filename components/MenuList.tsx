import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Stack } from '@mui/material';
import Link from 'next/link'

const Header = () => {
  return (
    <Stack direction="row" className='header'>
      <div>
        <h1 className='standar-font'>Contact List</h1>
      </div>
      <div className='menu-icon pointer-mouse'>
        <Link href="/CreateContact">
          <AddCircleIcon sx={{fontSize:40}}/>
        </Link>
      </div>
    </Stack>
  )
}

export default Header