import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Box from "@mui/material/Box";

const HeaderComponent = (props) => {
  return (
    <Card sx={{ minWidth: 314, maxWidth: "100vh", marginTop: 10, mx: "auto" }}>
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          whats your thought? write below
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary">
          an app that helps remind you of things you want
        </Typography>
        <Box
          sx={{
            width: "auto",
            marginTop: 5,
            "& .MuiTextField-root": { marginTop: 2 }
          }}
        >
          <TextField
            id="title-input"
            label="Title"
            fullWidth
            autoComplete="off"
            helperText="*Required"
            onChange={props.titleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // addList();
              }
            }}
            // error={props.titleValue === ""}
            inputProps={{ maxLength: 50 }}
            required
            value={props.titleValue}
          />
          <TextField
            id="desc-input"
            label="Desc"
            multiline
            rows={4}
            fullWidth
            // helperText="*Required"
            onChange={props.descChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.addAction();
                document.getElementById("desc-input").blur();
                e.preventDefault();
              }
            }}
            // error={props.titleValue === ""}
            value={props.descValue}
          />
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="contained"
          color="info"
          size="medium"
          startIcon={<HighlightOffIcon />}
          onClick={props.clearAction}
        >
          Clear Input
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<AddCircleIcon />}
          onClick={props.addAction}
        >
          Add Input
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="error"
          startIcon={<RestartAltIcon />}
          onClick={props.resetAction}
        >
          Reset List
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeaderComponent;
