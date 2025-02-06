import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";


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
      
    </JournalLayout>
  )
}
