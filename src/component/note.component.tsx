import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardComponent from "./card.component";

const NoteComponent = ({ todoList, removeAction }) => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid
        container
        direction="row"
        // columns={{ xs: 4, md: 4, sm: 8 }}
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={3}
      >
        {todoList.map((todo, index) => (
          <Grid item key={"card-" + index + 1}>
            <CardComponent
              index={index + 1}
              actionDelete={() => removeAction(index)}
              title={todo.title}
              date={todo.date}
              desc={todo.desc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NoteComponent;
