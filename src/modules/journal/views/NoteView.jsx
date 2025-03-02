import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../../store/journal";
import Swal from "sweetalert2";



export const NoteView = () => {

    const dispatch = useDispatch();

    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    }, [formState])


    useEffect(() => {

        if( messageSaved.length > 0){
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
      
    }, [messageSaved])
    


    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }
    

    return (
        <Grid2 
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center'
            sx={{ mb: 1}}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid2>
                <Typography fontSize={ 39 } fontWeight='light'>{dateString}</Typography>
            </Grid2>

            <Grid2>
                <Button 
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary" 
                    sx={{ boxShadow: 5, padding: 2 }}
                >
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
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué hay de nuevo? Viejo!!!"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid2>


            {/* Galery */}
            <ImageGallery />


        </Grid2>
    )
}
