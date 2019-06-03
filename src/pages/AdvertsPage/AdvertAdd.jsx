import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { AddModal } from "./AdvertsStyle"
import TextField from '@material-ui/core/TextField';

function AdvertAdd({ open, onClose }) {
  return <Dialog open={open} onClose={onClose}>
    <AddModal>
      <TextField label="Псевдоним" margin="dense"/>
      <TextField label="Возраст" margin="dense"/>
      <TextField label="Город" margin="dense"/>
      <TextField label="Роль" margin="dense"/>
      <TextField label="Рост" margin="dense"/>
      <TextField label="Вес" margin="dense"/>
      <TextField label="Размер" margin="dense"/>
    </AddModal>
  </Dialog>;
}

export default AdvertAdd;
