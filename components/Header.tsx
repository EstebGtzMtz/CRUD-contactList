import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack } from '@mui/material';
import Link from 'next/link'
import { IHeaderProps } from '../interfaces/interfaces';
import { useRouter } from 'next/router'

const Header = ({title}:IHeaderProps) => {
  const router = useRouter()

  return (
    <Stack direction="row" className='header'>
      <div>
        <h1 className='standar-font'>{title}</h1>
      </div>
      {
        router.asPath === '/' ? (
          <div className='menu-icon pointer-mouse'>
            <Link href="/CreateContact">
              <AddCircleIcon sx={{fontSize:40}}/>
            </Link>
          </div>
        ) : (
          <div className='menu-icon pointer-mouse'>
            <Link href="/">
              <ArrowBackIcon sx={{fontSize:40}}/>
            </Link>
          </div>
        )
      }
    </Stack>
  )
}

export default Header