import React, { Component } from "react";
import FormDataTable from "../../components/formDataTable/FormDataTable";
import "./UserManager.scss";
import { CustomDropdown, CustomTextBox} from '../../components';
import * as Constants from "../../utils/constants";
import { deleteIcon } from "../../assets/index.js";
import FormStatusFormatter from "../../components/formStatusFormatter/FormStatusFormatter";
import FormAction from "../../components/formAction/FormAction";

const tableColumns = [
    {
      dataField: "form_id",
      text: "FORM ID",
      hidden: true,
    },
    {
      dataField: "category",
      text: "CATEGORY",
      sort: true,
      headerClasses: "tableHeader tableNarrowColumn",
    },
    {
      dataField: "creator",
      text: "CREATOR",
      sort: true,
      headerClasses: "tableHeader tableNarrowColumn",
    },
    {
      dataField: "name",
      text: "NAME",
      sort: true,
      headerClasses: "tableHeader",
    },
    {
      dataField: "responses",
      text: "RESPONSES",
      sort: true,
      headerClasses: "tableHeader tableNarrowColumn",
    },
    {
      dataField: "status",
      text: "STATUS",
      formatter: FormStatusFormatter,
      headerClasses: "tableHeader",
    },
    {
      dataField: "due_date",
      text: "DUE DATE",
      sort: true,
      headerClasses: "tableHeader",
    },
    {
      dataField: "actions",
      text: "ACTIONS",
      formatter: FormAction,
      headerClasses: "tableHeader",
    },

];

class FormManager extends Component {
    constructor() {
        super();
        this.state = {
            forms: [],
            filteredForms: [],
            searchText: "",
            formstatusFilter: "",
            fetchingForms: true,
            error: "",
        };
        this.updateSearchFilter = this.updateSearchFilter.bind(this);
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
        this.clearSearchFilters = this.clearSearchFilters.bind(this);
        this.renderFormTable = this.renderFormTable.bind(this);
    }

    componentDidMount() {
        fetch(`${Constants.apiRootURLForms}/forms`)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                forms: result,
                fetchingForms: false,
                filteredForms: result,
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

      /**
        * Function to apply filter to form data
        * @param {Value of Filter} filterValue
        * @param {Search Filter to apply search on} filterType
      */
      updateSearchFilter(filterValue, filterType) {

        // Update the state with the filter value before filtering the data
        this.setState(
          {
            [filterType]: filterValue,
          },
          () => {
            const stateObj = { ...this.state };
            // Apply the search filters to original forms data
            // TODO: room for optimize by filtering on existing filtered data
            const filteredForms = this.state.forms.filter((form) => {
              const searchTextFilter = stateObj.searchText
                ? form.category
                    .toLowerCase()
                    .includes(stateObj.searchText.toLowerCase()) ||
                  form.creator
                    .toLowerCase()
                    .includes(stateObj.searchText.toLowerCase()) ||
                  form.name
                    .toLowerCase()
                    .includes(stateObj.searchText.toLowerCase()) ||
                  form.due_date
                    .toLowerCase()
                    .includes(stateObj.searchText.toLowerCase())
                : true;
              const formstatusFilter = stateObj.formstatusFilter
                ? form.status === stateObj.formstatusFilter
                : true;
              return (
                searchTextFilter &&
                formstatusFilter
              );
            });

            // Update the filtered data in the state
            this.setState({
              filteredForms: filteredForms,
            });
          }
        );
      }
    /**
      * Function to handle text filter
      * @param {The input element} event
    */
    handleSearchFilterChange(event) {
      this.updateSearchFilter(event.target.value, 'searchText');
    }

    /**
     * Function to clear search filters
    */
    clearSearchFilters() {
      this.setState({
        filteredForms: this.state.forms,
        searchText: "",
        formstatusFilter: "",
      });
    }

      renderFormTable() {
        return (
          <div className="pageContent">
            <div className="tableFilterContainer">
              <img src={deleteIcon} alt="Clear" onClick={this.clearSearchFilters} />
              <CustomTextBox
                value={this.state.searchText}
                label="searchText"
                onChange={this.handleSearchFilterChange}
                placeholder="Search"
              />
              <CustomDropdown
                values={Object.values(Constants.formStatus)}
                title="Select status"
                onSelectCallback={this.updateSearchFilter}
                filterType="formstatusFilter"
                selectedValue={this.state.formstatusFilter}
              />
            </div>
            <FormDataTable
              keyField="form_id"
              columns={tableColumns}
              data={this.state.filteredForms}
            />
          </div>
        );
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
                    "Fetching Forms..."
                    :
                    this.renderFormTable()
            }
          </div>
        );
      }
}

export default FormManager;