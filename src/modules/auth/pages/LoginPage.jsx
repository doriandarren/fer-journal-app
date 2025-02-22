import { Google } from "@mui/icons-material";
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] )



  const onSubmit = (event) => {
    event.preventDefault();
    
    //console.log({ email, password });

    dispatch(startLoginWithEmailPassword({ email, password }));

  }


  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn(email, password));
  }



  return (
    <AuthLayout title="Login">
      <form 
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn animate__faster'
      >
          <Grid2 container 
            direction="column"
          >
            
            <Grid2 xs={12} sx={{ mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="email@email.com" 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid2>

            <Grid2 xs={12} sx={{ mt: 2}}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder="Password" 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid2>




            <Grid2 
              container
              display={ !!errorMessage ? '' : 'none' }
            >

              <Grid2 
                xs={12} 
                sx={{ mt:1 }}
              >
                <Alert severity="error"> {errorMessage} </Alert>
              </Grid2>


            </Grid2>




            <Grid2 
              container 
              spacing={2} 
              sx={{ mb: 2, mt: 1 }}
            >

              <Grid2 xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                >
                  Login
                </Button>
              </Grid2>

              <Grid2 xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  variant="contained" 
                  fullWidth
                  onClick={onGoogleSignIn}
                >
                  <Google />
                  <Typography sm={{ ml:1}} >Google</Typography>
                </Button>
              </Grid2>

            </Grid2>


            <Grid2 container direction='row' justifyContent='end'>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid2>


          </Grid2>

        </form>

    </AuthLayout>

  )
}
