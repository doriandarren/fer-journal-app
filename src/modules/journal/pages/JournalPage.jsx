import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";


export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odit consequatur ab error sit modi ratione dicta reiciendis 
        velit, exercitationem voluptatibus. Tempora reiciendis 
        veniam fugit voluptas unde, corporis alias expedita pariatur?
      </Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}


      <IconButton
        size="large"
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
