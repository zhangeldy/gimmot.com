import React from "react";
import { Tabs } from 'antd';
import Users from "../Users/Users";
import Roles from "../Roles/Roles";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";


const TabPane = Tabs.TabPane;


function UserManagePage({text}) {
  return (
    <div style={{width:'100%', padding:'2%'}} >
      <Tabs type="card"  style={{ marginBottom:"20px"}}>
        <TabPane tab={text("Пользователи")} key="1"><Users/></TabPane>
        <TabPane tab={text("Роли")}  key="2"><Roles/></TabPane>
      </Tabs>
    </div>

  );
}


export default compose(
  connect(null,null),
  withLocalization
)(UserManagePage)

