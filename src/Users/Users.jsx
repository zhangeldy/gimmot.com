import React, { useEffect } from "react";
import Table from "../_ui/Table/Table";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import Edit from "@material-ui/icons/Edit";
import { Switch } from "antd";
import { history } from "../_helpers/store";
import { usersModul, getUsers, updateUser } from "./UsersDucks";
import swal from "sweetalert";


function Users({ text, users, getUsers, updateUser }) {

  useEffect(() => {getUsers()}, []);

  const changeStatus = (user, isActive) => {
    swal({
      icon: "warning",
      dangerMode: true,
      buttons: true,
      text: isActive ? text("разблокировать пользователя ?")
            : text("заблокировать пользователя ?")
    }).then((confirm) => updateUser({...user,islocked :isActive}));
  };


  const columnsInternal = [
    { Header: "№", accessor: "rownum", width: 80 },
    { Header: text("ФИО"), accessor: "userNames" },
    { Header: text("Логин"), accessor: "login" },
    { Header: text("Пароль"), accessor: "password" },
    { Header: text("Email"), accessor: "email" },
    { Header: text("Роль"), accessor: "role" },
    { Header: text("Примечание"), accessor: "note" },
    {
      Header: text("Действие"), accessor: "islocked",
      Cell: row => (
        <div className="center">
          <Switch
            checked={row.original.islocked}
            size="small"
            color='primary'
            onChange={(checked) => changeStatus(row.original, checked)}/>
          <Button
            color='primary'
            onClick={() => history.push("/usermanage/user/edit/" + 128)}>
            <Edit className='mr1' style={{ fontSize: 18 }}/>
          </Button>

        </div>
      )
    }
  ];

  return (
    <>
      <Table
        columns={columnsInternal}
        data={users}
        loading={false}
        buttons={
          <Link to="/usermanage/user/create">
            <Button variant="contained" color="primary">
              <AddIcon className="mr-10"/>
              {text("Добавить")}
            </Button>
          </Link>
        }
      />
    </>
  );
}

const mapStateProp = state => ({
  users: state[usersModul].users
});

export default compose(
  connect(mapStateProp, { getUsers, updateUser }),
  withLocalization
)(Users);

