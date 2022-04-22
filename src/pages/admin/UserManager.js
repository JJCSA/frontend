import React, { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import DataTable from '../../components/datatable/DataTable';
import './UserManager.scss';
import { CustomDropdown, CustomTextBox } from '../../components';
import * as Constants from '../../utils/constants';
import { deleteIcon } from '../../assets/index';
import PhoneNumberFormatter from '../../components/phoneNumberFormatter/PhoneNumberFormatter';
import UserStatusFormatter from '../../components/userStatusFormatter/UserStatusFormatter';
import ImageFormatter from '../../components/imageFormatter/ImageFormatter';
import comm from '../../helpers/communication';

function UserManager() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [userStatusFilter, setUserStatusFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [userTypeFilter, setUserTypeFilter] = useState('');
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [error, setError] = useState('');

  const auth = useAuthHeader();

  const result = [
    {
      id: '580995e0-15c2-496e-8695-a693218e6845',
      email: 't5@gmail.com',
      educationList: [],
      workExperience: [],
      lastUpdatedDate: null,
      approvedDate: null,
      firstName: 'Tejas',
      middleName: null,
      lastName: 'Shah',
      mobileNumber: '123456789',
      contactMethod: 'Email',
      communityName: 'xyz',
      communityDocumentURL: '/tmp/jjcsaTmpDir307165195660106183/580995e0-15c2-496e-8695-a693218e6845/COMMUNITY_DOCUMENT.jpeg',
      userStatus: 'Pending',
      street: null,
      city: 'Canton',
      state: 'MI',
      zip: null,
      dateOfBirth: null,
      profilePicture: '/tmp/jjcsaTmpDir5756097402098462741/580995e0-15c2-496e-8695-a693218e6845/PROFILE_PICTURE.jpeg',
      socialMediaPlatform: null,
      volunteeringInterest: null,
      loanTaken: false,
      loanOrganization: null,
      linkedinUrl: null,
      description: null,
      contactShared: false,
      country: null,
      userStudent: true,
      userRole: 'ADMIN',
    },
  ];

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
      const response = await comm.get('/admin/users', auth(), null);
      const userList = response.data;
      // console.log(userList);
      userList.map((user) => {
        user.name = `${user.firstName} ${user.lastName}`;
      });
      setUsers(userList);
      setFilteredUsers(userList);
      setFetchingUsers(false);
    }

    // const userList = result;
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
    const elementsIndexInFilteredUsers = filteredUsers.findIndex((element) => element.user_id === user_id);
    const elementsIndexInUsers = users.findIndex((element) => element.user_id === user_id);

    // Updating the array based on the status
    if (updated_record.status === Constants.userStatus.APPROVED) {
      newusers[elementsIndexInUsers] = { ...newusers[elementsIndexInUsers], status: updated_record.status };
      newfiltered_users[elementsIndexInFilteredUsers] = { ...newfiltered_users[elementsIndexInFilteredUsers], status: updated_record.status };
    } else {
      newusers.splice(elementsIndexInUsers, 1);
      newfiltered_users.splice(elementsIndexInFilteredUsers, 1);
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
    if (filterType === 'userStatusFilter') {
      setUserStatusFilter(filterValue);
    } else if (filterType === 'locationFilter') {
      setLocationFilter(filterValue);
    } else if (filterType === 'userTypeFilter') {
      setUserTypeFilter(filterValue);
    }
    // const stateObj = { ...this.state };
    // Apply the search filters to original users data
    // TODO: room for optimize by filtering on existing filtered data
    const filteredUsersLocal = users.filter((user) => {
      const searchTextFilter = searchText
        ? user.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
              || user.email
                .toLowerCase()
                .includes(searchText.toLowerCase())
              || user.number
                .toLowerCase()
                .includes(searchText.toLowerCase())
        : true;
      const userStatusFilterLocal = userStatusFilter
        ? user.status === userStatusFilter
        : true;
      const locationFilterLocal = locationFilter
        ? user.state === locationFilter
              || user.city === locationFilter
        : true;
      const userTypeFilterLocal = userTypeFilter
        ? user.type === userTypeFilter
        : true;

      setSearchText(searchTextFilter);
      setUserStatusFilter(userStatusFilterLocal);
      setLocationFilter(locationFilterLocal);
      setUserTypeFilter(userTypeFilterLocal);

    });

    // Update the filtered data in the state
    setFilteredUsers(filteredUsersLocal);
    // Update the state with the filter value before filtering the data
  };

  /**
   * Function to handle text filter
   * @param {The input element} event
   */
  const handleSearchFilterChange = (event) => {
    updateSearchFilter(event.target.value, 'searchText');
  };

  /**
   * Function to clear search filters
   */
  const clearSearchFilters = () => {
    setFilteredUsers(users);
    setSearchText('');
    setUserStatusFilter('');
    setLocationFilter('');
    setUserTypeFilter('');
  };

  const renderUserTable = () => (
    <div className="pageContent">
      <div className="tableFilterContainer">
        <img src={deleteIcon} alt="Clear" onClick={clearSearchFilters} />
        <CustomTextBox
          value={searchText}
          label="searchText"
          onChange={handleSearchFilterChange}
          placeholder="Search"
        />
        <CustomDropdown
          values={Object.values(Constants.userStatus)}
          title="Select Status"
          onSelectCallback={updateSearchFilter}
          filterType="userStatusFilter"
          selectedValue={userStatusFilter}
        />
        <CustomDropdown
          values={Constants.states}
          title="Select Location"
          onSelectCallback={updateSearchFilter}
          filterType="locationFilter"
          selectedValue={locationFilter}
        />
        <CustomDropdown
          values={Object.values(Constants.userTypes)}
          title="Select User Type"
          onSelectCallback={updateSearchFilter}
          filterType="userTypeFilter"
          selectedValue={userTypeFilter}
        />
      </div>
      <DataTable
        keyField="user_id"
        columns={tableColumns}
        data={filteredUsers}
        updateUserData={updateUserData}
      />
    </div>
  );

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>User Manager</h4>
      </div>
      {
          error
            ? `${error}`
            : ''
      }
      {
          fetchingUsers
            ? 'Fetching Users...'
            : renderUserTable()
      }
    </div>
  );
}

export default UserManager;