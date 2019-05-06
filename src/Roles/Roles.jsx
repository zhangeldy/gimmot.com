import React from "react";
import Table from "../_ui/Table/Table";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import { Switch } from "antd";
import { history } from "../_helpers/store";
import Edit from "@material-ui/icons/Edit";
import swal from "sweetalert";
import { Link } from "react-router-dom";



const listInternal = [
  {
    name: "Нурбеков Жайык Жунсалиевич",
    description: "web - разработчик",
    accessList: "zh.nurbekov@gmail.com",
  },
  {
    name: "Ережеп Дастан Жунсалиевич",
    description: "главный инженер сетей",
    accessList: "zh.nurbekov@gmail.com",
  }
];




function Roles({text}) {

  const changeStatus = (user, isActive) => {
    swal({
      icon: "warning",
      dangerMode: true,
      buttons: true,
      text: isActive ? text("разблокировать роль?"): text("заблокировать роль?")
    }).then((confirm) => {
      if (confirm) {
        let change = Object.assign({}, user);
        change.islocked = isActive;
        //updateUser(users, change);
      }} );
  };


  const columnsInternal = [
    { Header: "№", accessor: "rownum", width: 80 },
    { Header: text("Наименование"), accessor: "name" },
    { Header: text("Описание"), accessor: "description" },
    { Header: text("Список прав"), accessor: "accessList" },
    {
      Header: text("Действие"), accessor: "islocked" ,width: 200,
      Cell: row => (
        <div className="center">
          <Switch
            checked={row.original.islocked}
            size="small"
            color='primary'
            onChange={(checked) => changeStatus(row.original, checked)}/>
          <Button
            color='primary'
            onClick={() => history.push("/usermanage/role/edit/" + 128)}>
            <Edit className='mr1' style={{ fontSize: 18 }}/>
          </Button>

        </div>
      )
    }
  ];


  return (
    <div style={{width:'100%'}}>
      <Table
        columns={columnsInternal}
        data={listInternal}
        loading={false}
        buttons={
          <Link to="/usermanage/role/create">
            <Button variant="contained" color="primary">
              <AddIcon className="mr-10"/>
              {text("Добавить")}
            </Button>
          </Link>
        }
      />
    </div>
  );
}


export default compose(
  connect(null,null),
  withLocalization
)(Roles)
