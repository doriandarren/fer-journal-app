import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";



export const NoteView = () => {
  return (
    <Grid2 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center'
        sx={{ mb: 1}}
    >
        <Grid2>
            <Typography fontSize={ 39 } fontWeight='light'>28, de agosto, 2025</Typography>
        </Grid2>

        <Grid2>
            <Button color="primary" sx={{ boxShadow: 5, padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid2>

        <Grid2 container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Agrega el título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué hay de nuevo? Viejo!!!"
                minRows={5}
            />
        </Grid2>


        {/* Galery */}
        <ImageGallery />


    </Grid2>
  )
}
