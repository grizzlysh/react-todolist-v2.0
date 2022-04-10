import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 328,
  minHeight: 160,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24
};

const ModalComponent = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardHeader
          sx={{ background: "#7e57c2" }}
          title={
            <Typography
              sx={{ color: "white" }}
              noWrap
              variant="h5"
              component="div"
            >
              {props.title}
            </Typography>
          }
          // "Shrimp and Chorizo Paella"
          subheader={props.date}
          subheaderTypographyProps={{ color: "white" }}
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} variant="body1" component="div">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default ModalComponent;
