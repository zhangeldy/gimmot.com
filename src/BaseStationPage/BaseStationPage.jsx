import React,{useState} from "react";
import Table from "../_ui/Table/Table";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { compose } from "redux";
import { connect } from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import StationModal from "./StationModal";


const listInternal = [
  {
    name: "Аблайхана 14/1",
    ip: "100.10.10.0"
  },
  {
    name: "Отырар 10",
    ip: "100.10.10.0"
  }
];


function BaseStationPage({ text }) {

	const [showModal, setShowModal] = useState(false);

	const columnsInternal = [
    { Header: "№", accessor: "rowNum", width: 80 },
    { Header: text("Название базовой станции"), accessor: "name" },
    { Header: text("IP адрес"), accessor: "ip", width: 200 },
    {
      Header: text("Действие"), accessor: "actions", width: 200,
      Cell: row => (
        <div className="center">
          <Button
            color='primary'
            onClick={console.log("")}>
            <Edit className='mr1' style={{ fontSize: 18 }}/>
          </Button>
          <Button
            color='primary'
            onClick={console.log("")}>
            <Delete className='mr1' style={{ fontSize: 18 }}/>
          </Button>

        </div>
      )
    }
  ];


  return (
    <div >
      <Table
        columns={columnsInternal}
        data={listInternal}
        loading={false}
        onClickRow={row => setShowModal(true)}
        buttons={
          <Link to="">
            <Button variant="contained" color="primary">
              <AddIcon className="mr-10"/>
              {text("Создать")}
            </Button>
          </Link>
        }
      />
	    <StationModal
		    isOpen={showModal}
		    onClose={()=>setShowModal(false)}
	    />
    </div>
  );
}


export default compose(
  connect(null, null),
  withLocalization
)(BaseStationPage);



