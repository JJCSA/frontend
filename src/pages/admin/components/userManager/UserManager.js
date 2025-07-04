import React, { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import DataTable from '../../../../components/datatable/DataTable';
import './UserManager.css';
import { CustomDropdown, CustomTextBox } from '../../../../components';
import * as Constants from '../../../../utils/constants';
import { deleteIcon } from '../../../../assets/index';
import PhoneNumberFormatter from '../../../../components/phoneNumberFormatter/PhoneNumberFormatter';
import UserStatusFormatter from '../../../../components/userStatusFormatter/UserStatusFormatter';
import comm from '../../../../helpers/communication';
import Avatar from '../../../../components/avatar/Avatar';

function UserManager() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    searchText: '',
    userStatusFilter: '',
    locationFilter: '',
    userTypeFilter: '',
  });
  const token = useAuthHeader()();

  const ImageFormatter = cell => {
    const imgLinkRegex = RegExp('(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)');
    const validImg = imgLinkRegex.test(cell);
    return <Avatar imgSrc={validImg ? cell : ''} avatarSize="small" />;
  };
  const tableColumns = [
    {
      dataField: 'id',
      text: 'id',
      hidden: true,
    },
    {
      dataField: 'profilePicture',
      text: 'PROFILE',
      headerClasses: 'tableHeader tableNarrowColumn',
      formatter: ImageFormatter,
    },
    {
      dataField: 'name',
      text: 'NAME',
      headerClasses: 'tableHeader tableNarrowColumn',
      sort: true,
    },
    {
      dataField: 'userRole',
      text: 'ROLE',
      headerClasses: 'tableHeader tableNarrowColumn',
      sort: true,
    },
    {
      dataField: 'email',
      text: 'EMAIL',
      headerClasses: 'tableHeader tableBroadColumn',
      sort: true,
    },
    {
      dataField: 'mobileNumber',
      text: 'NUMBER',
      headerClasses: 'tableHeader',
      formatter: PhoneNumberFormatter,
      sort: true,
    },
    {
      dataField: 'userStatus',
      text: 'STATUS',
      headerClasses: 'tableHeader tableNarrowColumn',
      formatter: UserStatusFormatter,
      sort: true,
    },
    {
      dataField: 'state',
      text: 'STATE',
      headerClasses: 'tableHeader tableNarrowColumn',
      sort: true,
    },
    {
      dataField: 'city',
      text: 'CITY',
      headerClasses: 'tableHeader tableNarrowColumn',
      sort: true,
    },
  ];

  useEffect(() => {
    async function getUserData() {
      const response = await comm.get('/admin/users', token, null);
      const userList = response.data;
      userList.map(user => {
        user.name = `${user.firstName} ${user.lastName}`;
      });
      setUsers(userList);
      setFilteredUsers(userList);
      setFetchingUsers(false);
    }
    getUserData();
  }, []);

  /**
   * Function to update Userdata based on particular Id
   * @param {User_id to update} user_id
   * @param {Updated record value} updated_records
   */

  const updateUserData = (user_id, updated_record) => {
    const newusers = [...users];
    const newfiltered_users = [...filteredUsers];

    // Finding the element index of the user_id to update
    const elementsIndexInFilteredUsers = filteredUsers.findIndex(
      element => element.id === user_id
    );
    const elementsIndexInUsers = users.findIndex(
      element => element.id === user_id
    );

    // Updating the array based on the status
    if (updated_record.userStatus === Constants.userStatus.NEWUSER) {
      newusers[elementsIndexInUsers] = {
        ...newusers[elementsIndexInUsers],
        userStatus: updated_record.userStatus,
      };
      newfiltered_users[elementsIndexInFilteredUsers] = {
        ...newfiltered_users[elementsIndexInFilteredUsers],
        userStatus: updated_record.userStatus,
      };
    } else if (updated_record.userStatus === Constants.userStatus.REJECTED) {
      newusers.splice(elementsIndexInUsers, 1);
      newfiltered_users.splice(elementsIndexInFilteredUsers, 1);

      //Updating UserRole by SuperAdmin if the user is Active
    } else if (updated_record.userStatus === Constants.userStatus.ACTIVE) {
      newusers[elementsIndexInUsers] = {
        ...newusers[elementsIndexInUsers],
        userRole: updated_record.userRole,
      };
      newusers[elementsIndexInUsers] = {
        ...newusers[elementsIndexInUsers],
        isRegionalContact: updated_record.isRegionalContact,
      };
      newfiltered_users[elementsIndexInFilteredUsers] = {
        ...newfiltered_users[elementsIndexInFilteredUsers],
        userRole: updated_record.userRole,
      };
      newfiltered_users[elementsIndexInFilteredUsers] = {
        ...newfiltered_users[elementsIndexInFilteredUsers],
        isRegionalContact: updated_record.isRegionalContact,
      };
    }

    setUsers(newusers);
    setFilteredUsers(newfiltered_users);
  };

  /**
   * Function to apply filter to user data
   * @param {Value of Filter} filterValue
   * @param {Search Filter to apply search on} filterType
   */
  const updateSearchFilter = (filterValue, filterType) => {
    setFilters({ ...filters, [filterType]: filterValue });
  };
  useEffect(() => {
    const filteredList = users.filter(user => {
      const searchTextFilter = filters.searchText
        ? user.name.toLowerCase().includes(filters.searchText?.toLowerCase()) ||
          user.email
            .toLowerCase()
            .includes(filters.searchText?.toLowerCase()) ||
          user.mobileNumber
            .toLowerCase()
            .includes(filters.searchText?.toLowerCase())
        : true;
      const userStatus = filters.userStatusFilter
        ? user.userStatus === filters.userStatusFilter
        : true;
      const location = filters.locationFilter
        ? user.state === filters.locationFilter ||
          user.city === filters.locationFilter
        : true;
      const userType = filters.userTypeFilter
        ? user.userRole === filters.userTypeFilter
        : true;
      return searchTextFilter && userStatus && location && userType;
    });
    setFilteredUsers(filteredList);
  }, [filters]);
  /**
   * Function to handle text filter
   * @param {The input element} event
   */
  const handleSearchFilterChange = event => {
    updateSearchFilter(event.target.value, 'searchText');
  };

  /**
   * Function to clear search filters
   */
  const clearSearchFilters = () => {
    setFilteredUsers(users);
    setFilters({
      searchText: '',
      userStatusFilter: '',
      locationFilter: '',
      userTypeFilter: '',
    });
  };

  const renderUserTable = () => (
    <div className="pageContent">
      <div className="tableFilterContainer">
        <img src={deleteIcon} alt="Clear" onClick={clearSearchFilters} />
        <CustomTextBox
          value={filters.searchText}
          label="searchText"
          onChange={handleSearchFilterChange}
          placeholder="Search"
        />
        <CustomDropdown
          values={Object.values(Constants.userStatus)}
          title="Select Status"
          onSelectCallback={updateSearchFilter}
          filterType="userStatusFilter"
          selectedValue={filters.userStatusFilter}
        />
        <CustomDropdown
          values={Constants.states}
          title="Select Location"
          onSelectCallback={updateSearchFilter}
          filterType="locationFilter"
          selectedValue={filters.locationFilter}
        />
        <CustomDropdown
          values={Object.values(Constants.userTypes)}
          title="Select User Type"
          onSelectCallback={updateSearchFilter}
          filterType="userTypeFilter"
          selectedValue={filters.userTypeFilter}
        />
      </div>
      <DataTable
        keyField="user_id"
        columns={tableColumns}
        data={filteredUsers}
        updateUserData={updateUserData}
        token={token}
      />
    </div>
  );

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>User Manager</h4>
      </div>
      {error ? `${error}` : ''}
      {fetchingUsers ? 'Fetching Users...' : renderUserTable()}
    </div>
  );
}

export default UserManager;
