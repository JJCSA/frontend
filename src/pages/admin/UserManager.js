import React, { Component } from "react";
import DataTable from "../../components/datatable/DataTable";
import "./UserManager.scss";
import { CustomDropdown, CustomTextBox} from '../../components';
import * as Constants from "../../utils/constants";
import { deleteIcon } from "../../assets/index.js";
import PhoneNumberFormatter from "../../components/phoneNumberFormatter/PhoneNumberFormatter";
import StatusFormatter from "../../components/statusFormatter/StatusFormatter";
import ImageFormatter from "../../components/imageFormatter/ImageFormatter";


const tableColumns = [
  {
    dataField: "user_id",
    text: "user_id",
    hidden: true,
  },
  {
    dataField: "image",
    text: "IMAGE",
    headerClasses: "tableHeader tableNarrowColumn",
    formatter: ImageFormatter,
  },
  {
    dataField: "name",
    text: "NAME",
    headerClasses: "tableHeader tableBroadColumn",
    sort: true,
  },
  {
    dataField: "type",
    text: "TYPE",
    headerClasses: "tableHeader tableNarrowColumn",
    sort: true,
  },
  {
    dataField: "email",
    text: "EMAIL",
    headerClasses: "tableHeader tableBroadColumn",
    sort: true,
  },
  {
    dataField: "number",
    text: "NUMBER",
    headerClasses: "tableHeader",
    formatter: PhoneNumberFormatter,
    sort: true,
  },
  {
    dataField: "status",
    text: "STATUS",
    headerClasses: "tableHeader",
    formatter: StatusFormatter,
    sort: true,
  },
  {
    dataField: "state",
    text: "STATE",
    headerClasses: "tableHeader",
    sort: true,
  },
  {
    dataField: "city",
    text: "CITY",
    headerClasses: "tableHeader",
    sort: true,
  },
];

const users = [
    {
        "user_id": 1,
        "image": "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
        "name": "Tejas Shah",
        "type": "Admin",
        "email": "a@a.com",
        "number": "+18573139750",
        "status": "Pending",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 2,
        "image": "img.com",
        "name": "Alex Beck",
        "type": "User",
        "email": "b@a.com",
        "number": "+18573139750",
        "status": "Pending",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 3,
        "image": "img",
        "name": "Tejas Shah",
        "type": "Admin",
        "email": "a@a.com",
        "number": "+918573139750",
        "status": "Pending",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 4,
        "image": "img",
        "name": "Alex Beck",
        "type": "User",
        "email": "b@a.com",
        "number": "8573139750",
        "status": "Pending",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 5,
        "image": "img",
        "name": "Alex Beck",
        "type": "User",
        "email": "b@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 6,
        "image": "img",
        "name": "Borat Beck",
        "type": "User",
        "email": "b@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 7,
        "image": "img",
        "name": "Duck Beck",
        "type": "User",
        "email": "b@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Massachusetts",
        "city": "Boston"
    },
    {
        "user_id": 8,
        "image": "img",
        "name": "Cat Beck",
        "type": "User",
        "email": "b@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Illinois",
        "city": "Chicago"
    },
    {
        "user_id": 9,
        "image": "img",
        "name": "Suzanne Beck",
        "type": "Admin",
        "email": "Suzanne@beck.com",
        "number": "8573149750",
        "status": "Pending",
        "state": "Maryland",
        "city": "Baltimore"
    },
    {
        "user_id": 10,
        "image": "img",
        "name": "Jack Beck",
        "type": "User",
        "email": "jack@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Washington",
        "city": "Seattle"
    },
    {
        "user_id": 11,
        "image": "img",
        "name": "Zack Beck",
        "type": "Admin",
        "email": "b@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "New York",
        "city": "New York City"
    },
    {
        "user_id": 12,
        "image": "img",
        "name": "Kate Beck",
        "type": "User",
        "email": "kate@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Texas",
        "city": "Austin"
    },
    {
        "user_id": 13,
        "image": "img",
        "name": "Haley Beck",
        "type": "User",
        "email": "haley@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "California",
        "city": "San Diego"
    },
    {
        "user_id": 14,
        "image": "img",
        "name": "Sai Beck",
        "type": "Admin",
        "email": "sai@a.com",
        "number": "8573139750",
        "status": "Approved",
        "state": "Pennsylvania",
        "city": "Scranton"
    },
    {
        "user_id": 15,
        "image": "img",
        "name": "Jim Harper",
        "type": "User",
        "email": "jim@a.com",
        "number": "8573139750",
        "status": "Pending",
        "state": "Floria",
        "city": "Miami"
    }
];

const phoneNumberFormatter = (cell) => {
    // Ref https://stackoverflow.com/a/8358141
    const cleaned = ('' + cell).replace(/\D/g, '');
    const match = cleaned.match(/^(1|91|)?(\d{3})(\d{3})(\d{4})$/);
    let formattedNumber = '' + cell;
    if(match) {
        const intlCode = (match[1] ? `+${match[1]} ` : '');
        formattedNumber = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return (
        <span>{formattedNumber}</span>
    );
}

const statusFormatter = (cell) => {
    const statusClass = (''+cell === 'Pending') ? 'pendingStatusContainer' : 'approvedStatusContainer'
    return (
        <div className={statusClass}>
            <span></span>
            <span>{cell}</span>
        </div>
    );
}

const imageFormatter = (cell) => {
    //ref https://stackoverflow.com/a/1443294
    const imgLinkRegex = RegExp('(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)');
    const validImg = imgLinkRegex.test(cell);
    return (
        <Avatar 
            src={validImg ? cell : ''}
        />
    )
}

const tableColumns = [
    {
        dataField: 'user_id',
        text: 'user_id',
        hidden: true
    },
    {
        dataField: 'image',
        text: 'IMAGE',
        headerClasses: 'tableHeader tableNarrowColumn',
        formatter: imageFormatter
    },
    {
        dataField: 'name',
        text: 'NAME',
        headerClasses: 'tableHeader tableBroadColumn',
        sort: true
    },
    {
        dataField: 'type',
        text: 'TYPE',
        headerClasses: 'tableHeader tableNarrowColumn',
        sort: true
    },
    {
        dataField: 'email',
        text: 'EMAIL',
        headerClasses: 'tableHeader tableBroadColumn',
        sort: true
    },
    {
        dataField: 'number',
        text: 'NUMBER',
        headerClasses: 'tableHeader',
        formatter: phoneNumberFormatter,
        sort: true
    },
    {
        dataField: 'status',
        text: 'STATUS',
        headerClasses: 'tableHeader',
        formatter: statusFormatter,
        sort: true
    },
    {
        dataField: 'state',
        text: 'STATE',
        headerClasses: 'tableHeader',
        sort: true
    },
    {
        dataField: 'city',
        text: 'CITY',
        headerClasses: 'tableHeader',
        sort: true
    },
];

class UserManager extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filteredUsers: [],
      searchText: "",
      userStatusFilter: "",
      locationFilter: "",
      userTypeFilter: "",
      fetchingUsers: true,
      error: "",
    };
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
    this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
    this.clearSearchFilters = this.clearSearchFilters.bind(this);
    this.renderUserTable = this.renderUserTable.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
  }

<<<<<<< HEAD
  componentDidMount() {
    fetch(`${Constants.apiRootURL}/users`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            users: result,
            filteredUsers: result,
            fetchingUsers: false,
          });
        },
        (error) => {
          this.setState({
            fetchingUsers: false,
            error,
          });
        }
      );
  }

  /**
   * Function to update Userdata based on particular Id
   * @param {User_id to update} user_id
   * @param {Updated record value} updated_records
   */

  updateUserData(user_id, updated_record) {
    let newusers = [...this.state.users]
    let newfiltered_users = [...this.state.filteredUsers]

    // Finding the element index of the user_id to update
    const elementsIndexInFilteredUsers = this.state.filteredUsers.findIndex(element => element.user_id === user_id )
    const elementsIndexInUsers = this.state.users.findIndex(element => element.user_id === user_id )

    // Updating the array based on the status
    if(updated_record.status === Constants.userStatus.APPROVED) {
      newusers[elementsIndexInUsers] = {...newusers[elementsIndexInUsers], status: updated_record.status}
      newfiltered_users[elementsIndexInFilteredUsers] = {...newfiltered_users[elementsIndexInFilteredUsers], status: updated_record.status}
    } else {
      newusers.splice(elementsIndexInUsers, 1)
      newfiltered_users.splice(elementsIndexInFilteredUsers, 1)
    }
    this.setState({
      users: newusers,
      filteredUsers: newfiltered_users
      });
  }

  /**
   * Function to apply filter to user data
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
        // Apply the search filters to original users data
        // TODO: room for optimize by filtering on existing filtered data
        const filteredUsers = this.state.users.filter((user) => {
          const searchTextFilter = stateObj.searchText
            ? user.name
                .toLowerCase()
                .includes(stateObj.searchText.toLowerCase()) ||
              user.email
                .toLowerCase()
                .includes(stateObj.searchText.toLowerCase()) ||
              user.number
                .toLowerCase()
                .includes(stateObj.searchText.toLowerCase())
            : true;
          const userStatusFilter = stateObj.userStatusFilter
            ? user.status === stateObj.userStatusFilter
            : true;
          const locationFilter = stateObj.locationFilter
            ? user.state === stateObj.locationFilter ||
              user.city === stateObj.locationFilter
            : true;
          const userTypeFilter = stateObj.userTypeFilter
            ? user.type === stateObj.userTypeFilter
            : true;
          return (
            searchTextFilter &&
            userStatusFilter &&
            locationFilter &&
            userTypeFilter
          );
        });

        // Update the filtered data in the state
        this.setState({
          filteredUsers: filteredUsers,
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
      filteredUsers: this.state.users,
      searchText: "",
      userStatusFilter: "",
      locationFilter: "",
      userTypeFilter: "",
    });
  }

  renderUserTable() {
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
            values={Object.values(Constants.userStatus)}
            title="Select Status"
            onSelectCallback={this.updateSearchFilter}
            filterType="userStatusFilter"
            selectedValue={this.state.userStatusFilter}
          />
          <CustomDropdown
            values={Constants.states}
            title="Select Location"
            onSelectCallback={this.updateSearchFilter}
            filterType="locationFilter"
            selectedValue={this.state.locationFilter}
          />
          <CustomDropdown
            values={Object.values(Constants.userTypes)}
            title="Select User Type"
            onSelectCallback={this.updateSearchFilter}
            filterType="userTypeFilter"
            selectedValue={this.state.userTypeFilter}
          />
        </div>
        <DataTable
          keyField="user_id"
          columns={tableColumns}
          data={this.state.filteredUsers}
          updateUserData={this.updateUserData}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="pageContainer">
        <div className="pageHeader">
          <h4>User Manager</h4>
        </div>
        {
            this.state.error ? 
                `${this.state.error}`
                :
                ''
        }
        {
            this.state.fetchingUsers ?
                "Fetching Users..."
                :
                this.renderUserTable()
        }
      </div>
    );
  }
=======
    constructor() {
        super();
        this.state = {
            users: users,
            filteredUsers: users,
            searchText: '',
            userStatusFilter: '',
            locationFilter: '',
            userTypeFilter: ''
        }
        this.updateSearchFilter = this.updateSearchFilter.bind(this);
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
    };

    /**
     * Function to apply filter to user data
     * @param {Value of Filter} filterValue 
     * @param {Selected Event Object} event 
     */
    updateSearchFilter(filterValue, event) {
        // Get Filter Type from the target's label attribute
        const filterType = event.target.getAttribute('label');

        // Update the state with the filter value before filtering the data
        this.setState({
            [filterType]: filterValue
        }, () => {
            const stateObj = {...this.state};
            // Apply the search filters to original users data
            // TODO: room for optimize by filtering on existing filtered data
            const filteredUsers = this.state.users.filter((user) => {
                const searchTextFilter = stateObj.searchText ?
                                            (
                                                user.name.includes(stateObj.searchText)
                                                    || user.email.includes(stateObj.searchText)
                                                    || user.number.includes(stateObj.searchText)
                                            )
                                            : true;
                const userStatusFilter = stateObj.userStatusFilter ?
                                            (
                                                user.status === stateObj.userStatusFilter
                                            )
                                            : true;
                const locationFilter = stateObj.locationFilter ?
                                            (
                                                user.state === stateObj.locationFilter
                                                    || user.city === stateObj.locationFilter
                                            )
                                            : true;
                const userTypeFilter = stateObj.userTypeFilter ?
                                            (
                                                user.type === stateObj.userTypeFilter
                                            )
                                            : true;
                return (
                    searchTextFilter
                    && userStatusFilter
                    && locationFilter
                    && userTypeFilter
                );
            });

            // Update the filtered data in the state
            this.setState({
                filteredUsers: filteredUsers
            });
        });

    }

    /**
     * Function to handle text filter
     * @param {The input element} event 
     */
    handleSearchFilterChange(event) {
        this.updateSearchFilter(event.target.value, event);
    }

    render() {
        return (
            <div className="pageContainer">
                <div className="pageHeader">
                    <h4>User Manager</h4>
                </div>
                <div className="pageContent">
                    <input value={this.state.searchTextFilter} label="searchText" onChange={this.handleSearchFilterChange} />
                    <DropdownButton 
                        title="Select Status" 
                        onSelect={this.updateSearchFilter}
                        id="userStatus"
                    >
                        {
                            Object.keys(Constants.userStatus).map((key, index) => 
                                <Dropdown.Item key={index} eventKey={Constants.userStatus[key]} label="userStatusFilter">{Constants.userStatus[key]}</Dropdown.Item>
                            )
                        }
                    </DropdownButton>
                    <DropdownButton
                        title="Select User Type"
                        onSelect={this.updateSearchFilter}
                        id="userType"
                    >
                        {
                            Object.keys(Constants.userTypes).map((key, index) => 
                                <Dropdown.Item key={index} eventKey={Constants.userTypes[key]} label="userTypeFilter">{Constants.userTypes[key]}</Dropdown.Item>
                            )
                        }
                    </DropdownButton>
                    <DataTable 
                        keyField="user_id"
                        columns={tableColumns} 
                        data={this.state.filteredUsers} 
                    />
                </div>
                
            </div>
        )
    }
>>>>>>> Add Search Filter to DataTable
}

export default UserManager;