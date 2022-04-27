import React from "react";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "./UserNavbar.scss";

function UserHomepage() {
  const [userlist, setUserList] = useState([]);
  const [sizePerPage, setSizePerPage] = useState("5");

  const columns = [
    { dataField: "fullName", text: "Name", sort: true, filter: textFilter() },
    {
      dataField: "livingState",
      text: "Living State",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "livingCity",
      text: "Living City",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "workSpecialization",
      text: "Work Specilization",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "university",
      text: "University",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "workRole",
      text: "Work Role",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "regionalContact",
      text: "Regional Contact",
      sort: true,
      filter: textFilter(),
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: sizePerPage,
    prePageText: " ",
    lastPageText: " ",
    firstPageText: " ",
    nextPageText: " ",

    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },

    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setSizePerPage(e.target.value);
  };
  console.log(userlist);
  useEffect(() => {
    fetch("http://localhost:9080/api/user/jjcsearch")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-table">
      <div className="table-users">
        <BootstrapTable
          bootstrap4
          keyField="id"
          columns={columns}
          data={userlist}
          pagination={pagination}
          filter={filterFactory()}
        />
      </div>
    </div>
  );
}
export default UserHomepage;
