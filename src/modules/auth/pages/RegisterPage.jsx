import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
       <form>
          <Grid2 container 
            direction="column"
          >

            <Grid2 xs={12} sx={{ mt: 2}}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Jonh Doe" 
                fullWidth
              />
            </Grid2>
            
            <Grid2 xs={12} sx={{ mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="email@email.com" 
                fullWidth
              />
            </Grid2>

            <Grid2 xs={12} sx={{ mt: 2}}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder="Password" 
                fullWidth
              />
            </Grid2>


            <Grid2 container spacing={2} sx={{ mb: 2, mt: 1}}>

              <Grid2 xs={12} sm={6}>
                <Button variant="contained" fullWidth >
                  Crear cuenta
                </Button>
              </Grid2>

            </Grid2>


            <Grid2 container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Acceder
              </Link>
            </Grid2>


          </Grid2>

        </form>

    </AuthLayout>

  )
}
