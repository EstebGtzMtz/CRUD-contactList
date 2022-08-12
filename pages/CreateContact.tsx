import { Alert, AlertTitle, Avatar, Backdrop, Button, CircularProgress, Grid, Link as MaterialUILink, Stack, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import { INewContactSubmit } from "../interfaces/interfaces";
import { createNewContact } from "../services/ContactsServices";
import { useEffect, useState } from "react";
import { EMAIL_REGEX, STRING_REGEX } from "../helpers/constants";
import SendIcon from '@mui/icons-material/Send';
import ErrorIcon from '@mui/icons-material/Error';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Link from "next/link";

const CreateContact = () => {

  const { register, handleSubmit, reset,formState: { errors, isSubmitSuccessful } } = useForm<INewContactSubmit>();
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState('')

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ firstName: '', lastName:'', email:'', phone:'' });
    }
  }, [ isSubmitSuccessful,reset]);

  const onSubmit: SubmitHandler<INewContactSubmit> = async data => {
    setOpen(true);
    const res = await createNewContact(data);
    setIsError(res)
    setOpen(false);
  }

  return (
    <Container maxWidth="xl" className='center-form'>
      <Avatar sx={{ m: 5, bgcolor: 'secondary.main',width: 56, height: 56 }}>
        <PersonAddAlt1Icon />
      </Avatar>
      <Stack direction="column" className='header'>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>          
          <TextField 
            fullWidth 
            label="First name" 
            variant="outlined" 
            margin='dense' 
            required 
            {...register("firstName",{
              pattern:STRING_REGEX,
              required:true
            })} 
          />
            {errors.firstName && <span className="show-error">This field is required</span>}
          <TextField 
            fullWidth 
            label="Last name" 
            variant="outlined" 
            margin='dense' required 
            {...register("lastName", {
              pattern: STRING_REGEX,
              required:true
            })} 
          />
            {errors.lastName && <span className="show-error">This field is required</span>}
          <TextField 
            fullWidth 
            label="Email" 
            variant="outlined" 
            margin='dense' 
            required 
            {...register("email", {
              pattern:EMAIL_REGEX,
              required:true
            })} />
            {errors.email && <span className="show-error">Enter a valid email <ErrorIcon/></span>}
          <TextField 
            fullWidth 
            label="Phone number" 
            variant="outlined" 
            margin='dense' 
            required 
            {...register("phone",{
              minLength: 10,
              maxLength:10,
              required:true
            })} />
            {errors.phone && <span className="show-error">Type a valid phone number</span>}
          <div>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
              endIcon={<SendIcon />}>
              Create New Contact
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/">
                  <MaterialUILink href="#" variant="body2">
                    GO BACK TO CONTACT LIST
                  </MaterialUILink>
                </Link>
              </Grid>
            </Grid>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            {isError === 'This email address already exists!' && 
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {isError}
              </Alert> 
            }
          </div>
        </form>
      </Box>
      </Stack>
    </Container>
  )
}

export default CreateContact