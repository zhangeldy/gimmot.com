import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { AddModal } from "./AdvertsStyle";
import Input from "../../_ui/Input/Input";
import withMobileDialog from "@material-ui/core/withMobileDialog";

function AdvertAdd({ open, onClose, fullScreen }) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <AddModal>
        <div className="flex">
          <Input style={{ width: 150, marginRight: 10 }} label="Псевдоним" />
          <Input style={{ width: 60 }} label="Возраст" />
        </div>
        <div>
          <Input style={{ width: 150, marginRight: 10 }} label="Город" />
          <Input style={{ width: 80, marginRight: 10 }} label="Роль" />
          <Input style={{ width: 130 }} label="Рост/Вес/Размер" />
        </div>
        <div>
          <Input label="Текст" multiLine />
        </div>
      </AddModal>
    </Dialog>
  );
}

export default withMobileDialog()(AdvertAdd);
