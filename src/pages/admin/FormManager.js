import "./UserManager.scss";
import * as Constants from "../../utils/constants";
// import { deleteIcon } from "../../assets/index.js";
import React, { Component } from "react";
import FormDataTable from '../../components/formDataTable/FormDataTable';
import StatusFormatter from "../../components/statusFormatter/StatusFormatter";

const tableColumns = [
    {
      dataField: "form_id",
      hidden: true,
      key:true
    },
    {
      dataField: "Category",
      sort: true,
    },
    {
      dataField: "Creator",
      sort: true,
    },
    {
      dataField: "Name",
      sort: true,
    },
    {
      dataField: "Responses",
      sort: true,
    },
    {
      dataField: "Status",
      dataFormat: StatusFormatter,
      sort: true,
      filterType: 'SelectFilter',
      options: Constants.formStatus
    },
    {
      dataField: "Due Date",
      sort: true,
    },
];

class FormManager extends Component {
    constructor() {
        super();
        this.state = {
            forms: [],
            fetchingForms: true,
            error: ""
        }
    }
    componentDidMount() {
        fetch(`${Constants.apiRootURLForms}/forms`)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                forms: result,
                fetchingForms: false,
              });
            },
            (error) => {
              this.setState({
                fetchingForms: false,
                error,
              });
            }
          );
    }

    renderFormTable() {
        return (
            <div className="pageContent">
                {/* <div className="tableFilterContainer">
                    <img src={deleteIcon} alt="Clear" onClick={this.clearSearchFilters} />
                </div> */}
                <FormDataTable columns={tableColumns} data={this.state.forms} />
            </div>
        )
    }

    render() {
        return (
            <div className="pageContainer">
                <div className="pageHeader">
                <h4>Form Manager</h4>
                </div>
                {
                    this.state.error ? 
                        `${this.state.error}`
                        :
                        ''
                }
                {
                    this.state.fetchingForms ?
                        "Fetching Form Data..."
                        :
                        this.renderFormTable()
                }
            </div>
            // <FormDataTable columns={tableColumns} data={this.state.forms} />
        )
    }
}

export default FormManager;