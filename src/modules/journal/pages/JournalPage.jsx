import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../../store/journal";


export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal );


  console.log(active);


  const onClickNewNote = () => {
    
    dispatch( startNewNote() );

  }


  return (
    <JournalLayout>

      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odit consequatur ab error sit modi ratione dicta reiciendis 
        velit, exercitationem voluptatibus. Tempora reiciendis 
        veniam fugit voluptas unde, corporis alias expedita pariatur?
      </Typography> */}

      {
        (active) 
        ? <NoteView />
        : <NothingSelectedView /> 
      }

      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}


      <IconButton
        onClick={ onClickNewNote }
        size="large"
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      
    </JournalLayout>
  )
}
