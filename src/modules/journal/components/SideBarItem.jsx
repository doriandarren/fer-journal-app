import { TurnedInNot } from "@mui/icons-material";
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";

export const SideBarItem = ({id, title, body}) => {

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid2 container>
          <ListItemText primary={newTitle} />
          <ListItemText
            secondary={body}
          />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
