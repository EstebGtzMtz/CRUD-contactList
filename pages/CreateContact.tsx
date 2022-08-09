import { Alert, AlertTitle, Backdrop, Button, CircularProgress, Grid, Stack, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import { INewContactSubmit } from "../interfaces/responses";
import SendIcon from '@mui/icons-material/Send';
import { EMAIL_REGEX, STRING_REGEX } from "../helpers/constants";
import ErrorIcon from '@mui/icons-material/Error';
import { createNewContact } from "../services/ContactsServices";
import { useEffect, useState } from "react";
import Header from "../components/Header";

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
      <Stack direction="column" className='header'>
        <Grid item xs={12} md={12} lg={12}>
          <Header title='Add new contact'/>
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
            <Button type='submit' variant="contained" size='large' endIcon={<SendIcon />}>
              Save
            </Button>
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