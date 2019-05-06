import React from "react";
import { Modal, Tabs } from "antd";
import Roles from "../Roles/Roles";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import BaseStationTabs from "./BaseStationTabs";
import {Wrapper} from "./BaseStationStyles";


const TabPane = Tabs.TabPane;


function StationModal({ text,isOpen,onClose }) {

  return (
    <Wrapper>
      <Modal
        zIndex={1700}
        width={"60%"}
        maskClosable={false}
        title="Vertically centered modal dialog"
        centered
        visible={isOpen}
        onOk={onClose}
        onCancel={onClose}
      >
        <div className="card-container">
          <Tabs  type="card">
            <TabPane tab={text("Базовая станция")} key="1"><BaseStationTabs/></TabPane>
            <TabPane tab={text("Антенны")} key="2"><Roles/></TabPane>
            <TabPane tab={text("Изображения")} key="3"><Roles/></TabPane>
            <TabPane tab={text("История")} key="4"><Roles/></TabPane>
          </Tabs>
        </div>
      </Modal>
    </Wrapper>
  );
}

export default compose(
  connect(null, null),
  withLocalization
)(StationModal);

