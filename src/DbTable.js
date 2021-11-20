import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Input from "./components/Input";
import Table from "./components/Table";

const DbTable = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [conf, setConf] = useState("");
  const [id_p, setId_p] = useState(1);

  const handleClickOpen = (e, a) => {
    setConf(a);
    setId_p(e);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // TODO: submit to server
    setOpen(false);
  };

  const Popup = () => {
    let stud = data[id_p - 1];

    const EditForm = () => (
      <>
        {Object.keys(stud).map((e, i) => {
          let values = Object.values(stud)[i];
          return (
            <TextField
              key={i}
              margin="dense"
              id="name"
              label={e.toString()}
              type="email"
              fullWidth
              variant="standard"
              defaultValue={values.toString()}
            />
          );
        })}
      </>
    );

    return (
      <Dialog open={open}>
        <DialogTitle>{conf}</DialogTitle>
        <DialogContent>
          {conf === "edit" ? <EditForm /> : <>seguro de eliminar</>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    );
  };
  return (
    <Card>
      <Typography variant="h3">titulo</Typography>
      <Table handleOpen={(e, a) => handleClickOpen(e, a)} data={data} />
      <Button variant="contained">Add</Button>
      <Popup />
    </Card>
  );
};

export default DbTable;
