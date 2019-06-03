import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { AddModal } from "./AdvertsStyle";
import TextField from "@material-ui/core/TextField";
import Input from "../../_ui/Input/Input";
import withMobileDialog from "@material-ui/core/withMobileDialog";

function AdvertAdd({ open, onClose, fullScreen }) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <AddModal isMobile={fullScreen}>
        <div className="flex">
          <Input label="Псевдоним" labelSide />
          <Input label="Возраст" labelSide />
        </div>
        <div>
          <TextField label="Город" margin="dense" />
          <TextField label="Роль" margin="dense" />
          <TextField label="Рост" margin="dense" />
          <TextField label="Вес" margin="dense" />
          <TextField label="Размер" margin="dense" />
        </div>
      </AddModal>
    </Dialog>
  );
}

export default withMobileDialog()(AdvertAdd);
