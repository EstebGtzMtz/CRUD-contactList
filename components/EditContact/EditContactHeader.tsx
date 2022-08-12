import { Avatar, Grid } from '@mui/material';
import { stringAvatar } from '../../helpers/functions';
import { IContactsResults } from '../../interfaces/interfaces';

const EditContactHeader = ({firstName, lastName, email}: IContactsResults) => {
  return (
    <Grid className="user-icon-edit">
      <Grid item xs={4} sm={3} md={2} lg={2}>
        <Avatar {...stringAvatar(`${firstName} ${lastName}`, true)} variant='rounded' />
      </Grid>
      <Grid item xs={12} sm={8} md={4} lg={4}>
        <h2>
          {firstName} {lastName}
        </h2>
        <h4>
          {email}
        </h4>
      </Grid>
    </Grid>
  )
}

export default EditContactHeader