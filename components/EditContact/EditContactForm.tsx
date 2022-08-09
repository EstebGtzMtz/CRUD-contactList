import { Backdrop, Button, CircularProgress, Grid, Stack, TextField } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Container } from "@mui/system";
import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_REGEX, STRING_REGEX } from "../../helpers/constants";
import { IContact, INewContactSubmit } from "../../interfaces/interfaces";
import Header from "../Header";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { deleteUserById, updateUserById } from "../../services/ContactsServices";


const EditContactForm = (props:IContact) => {

  const [open, setOpen] = useState(false);
  const { register, reset,handleSubmit, formState: { errors } } = useForm<INewContactSubmit>({
    defaultValues:useMemo(() => {
      return props.contact;
    }, [props])
  });

  useEffect(() => {
    reset(props.contact);
  }, [props.contact]);

  const onSubmit: SubmitHandler<INewContactSubmit> = async data => {
    setOpen(true);
    await updateUserById(props.id, data);
    setOpen(false);
  }

  const deleteContactById = async () => {
    const res = await deleteUserById(props.id);
    console.log(res)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className='center-edit-form'>
      <Stack direction="column" className='header'>
        <Grid item xs={12} md={12} lg={12}>
          <Header title='Edit Contact Info'/>
        </Grid>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
        <form onSubmit={handleSubmit(onSubmit)}>          
          <TextField 
            fullWidth
            variant="outlined" 
            margin='dense' 
            {...register("firstName",{
              pattern:STRING_REGEX,
              required:true
            })} 
          />
            {errors.firstName && <span className="show-error">This field is required</span>}
          <TextField 
            fullWidth 
            variant="outlined" 
            margin='dense'
            {...register("lastName", {
              pattern: STRING_REGEX,
              required:true
            })} 
          />
            {errors.lastName && <span className="show-error">This field is required</span>}
          <TextField 
            fullWidth 
            variant="outlined" 
            margin='dense' 
            {...register("email", {
              pattern:EMAIL_REGEX,
            })} 
          />
            {errors.email && <span className="show-error">Enter a valid email <ErrorIcon/></span>}
          <TextField 
            fullWidth 
            variant="outlined" 
            margin='dense' 
            {...register("phone",{
              minLength: 10,
              maxLength:10,
              required:true
            })} 
          />
            {errors.phone && <span className="show-error">Type a valid phone number</span>}
          <div className="edit-info-buttons">
            <Link href="/">
              <Button variant="contained" color="warning" size='large' endIcon={<CancelIcon />}>
                Cancel
              </Button>
            </Link>
            <Button type='submit' variant="contained" size='large' endIcon={<SendIcon />}>
              Save
            </Button>
            <Link href="/">
              <Button onClick={deleteContactById} variant="contained" color="error" size='large' endIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Link>
          </div>
          <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
        </form>
      </Box>
      </Stack>
    </Container>
  )
}

export default EditContactForm