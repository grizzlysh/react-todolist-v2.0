import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import ModalComponent from "./modal.component";

export default function CardComponent(props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ width: 328, height: 160 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#7e57c2" }}
              onClick={handleOpen}
              aria-label="recipe"
            >
              {props.index}
            </Avatar>
          }
          action={
            <IconButton aria-label="clear" onClick={props.actionDelete}>
              <ClearIcon />
            </IconButton>
          }
          title={
            <Typography
              maxWidth={{ xs: 205 }}
              // maxWidth={{ xs: 200, sm: "auto" }}
              // style={{ wordWrap: "break-word" }}
              noWrap
              variant="h5"
              component="div"
            >
              {props.title}
            </Typography>
          }
          // "Shrimp and Chorizo Paella"
          subheader={props.date}
        />
        <CardContent>
          <Typography
            // maxWidth={310}
            noWrap
            sx={{ mb: 1.5 }}
            variant="body1"
            component="div"
          >
            {props.desc}
          </Typography>
          <ModalComponent
            key={props.index}
            open={open}
            onClose={handleClose}
            title={props.title}
            desc={props.desc}
            date={props.date}
          />
        </CardContent>
      </Card>
    </div>
  );
}
