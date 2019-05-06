import React, { useState } from "react";
import { Pagination } from "antd";
import ReactTable from "react-table";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Menu from "@material-ui/core/Menu";
import { Wrapper, Item, Loading } from "./TableStyles";


const Table = (props) => {

  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterColumns, setFilterColumns] = useState([]);


  const onFilterColumns = accessor => {
    let index = filterColumns.indexOf(accessor);
    if (index !== -1) filterColumns.splice(index, 1);
    else filterColumns.push(accessor);
    setFilterColumns({ filterColumns });
  };

  const getFilteredColumns = () => {
    const { columns } = props;
    let newColumns = [];
    for (let column of columns) {
      !filterColumns.includes(column.accessor) && newColumns.push(column);
    }
    return newColumns;
  };

  const getFilteredData = () => {
    const { data, columns } = props;
    let filteredData = [];
    for (let item of data) {
      if (searchText.trim() !== "") {
        let hasValue = null;
        let itemValues = "";

        for (let column of columns) {
          itemValues += item[column.accessor] + "";
        }

        for (let search of searchText.trim().split(" ")) {
          if (search !== "" && search !== " ") {
            if (itemValues.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
              if (hasValue !== false) hasValue = true;
            } else {
              hasValue = false;
            }
          }
        }
        if (hasValue !== null && hasValue !== false) filteredData.push(item);
      } else {
        filteredData.push(item);
      }
    }
    //if(filteredData.length>0) filteredData.map(item => item.rownum = filteredData.indexOf(item) + 1);
    return filteredData;
  };

  const customComponents = () => {
    const { onClickRow, loading } = props;
    return {
      getTrProps: (props, object) => {
        return {
          onClick() {
            if (typeof onClickRow === "function") onClickRow(object);
          },
          style: {
            cursor: typeof onClickRow === "function" ? "pointer" : "default"
          }
        };
      },

      defaultFilterMethod: (filter, row) =>
        String(row[filter.id])
          .toLowerCase()
          .indexOf(filter.value.toLowerCase()) !== -1

      ,
      PaginationComponent: param =>
        <div className="rt-pagination">
          <Pagination
            current={param.page + 1}
            pageSize={param.pageSize}
            showSizeChanger
            onShowSizeChange={(current, size) => param.onPageSizeChange(size)}
            pageSizeOptions={["10", "20", "40", "50", "100"]}
            onChange={page => param.onPageChange(page - 1)}
            total={param.pages * param.pageSize}
          />
        </div>

      ,
      NoDataComponent: () => {
        if (loading) return null;
        else return (
          <Loading className="-loading -active">
            <div className="-loading-inner">Нет данных</div>
          </Loading>
        );

      },
      LoadingComponent: data => {
        if (!data.loading) return null;
        else return (
          <Loading className="-loading -active">
            <div className="-loading-inner">
              <div className="rt-loading-circle">
                <CircularProgress/>
              </div>
            </div>
          </Loading>
        );
      }
    };
  };


  return (
    <Wrapper pointer={typeof props.onClickRow === "function"}>
      <div className="top-block">
        <div className="left">{props.buttons}</div>
        <div className="rt-search">
          <SearchIcon/>
          <input
            placeholder="Поиск"
            value={searchText}
            onChange={ev => setSearchText(ev.target.value)}
          />
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl({ anchorEl: null })}
          style={{ marginTop: 100 }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <Item>
            {props.columns.map(column => (
              <MenuItem
                key={column.accessor}
                onClick={() => onFilterColumns(column.accessor)}
              >
                <Checkbox
                  color="primary"
                  checked={!filterColumns.includes(column.accessor)}
                />
                {column.Header}
              </MenuItem>
            ))}
          </Item>
        </Menu>
      </div>
      <ReactTable
        {...props}
        columns={getFilteredColumns()}
        data={[...getFilteredData()]}
        defaultPageSize={10}
        className="-highlight"
        {...customComponents()}
      />
    </Wrapper>
  );
};

Table.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  buttons: PropTypes.element,
  onClickRow: PropTypes.func,
  pageSize: PropTypes.number,
  page: PropTypes.number,
  onPage: PropTypes.func
};

export default Table;
