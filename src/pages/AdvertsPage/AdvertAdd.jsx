import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { AddModal } from "./AdvertsStyle";
import Input from "../../_ui/Input/Input";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Form from "../../_ui/Form/Form";

function AdvertAdd({ open, onClose, fullScreen }) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <AddModal>
        <Form onSubmit={console.log}>
          <div className="flex">
            <Input name="name" label="Псевдоним" />
            <Input name="age" label="Возраст" />
          </div>
          <div>
            <Input name="country" label="Город" />
            <Input name="role" label="Роль" />
            <Input name="params" label="Рост/Вес/Размер" />
          </div>
          <div>
            <Input name="text" label="Текст" multiLine />
          </div>
        </Form>
      </AddModal>
    </Dialog>
  );
}

export default withMobileDialog()(AdvertAdd);
