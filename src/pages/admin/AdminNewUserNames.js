import React, { useState } from 'react';
import { useEffect } from 'react';
import comm from '../../helpers/communication';
import { useAuthHeader } from 'react-auth-kit';
import BootstrapTable from 'react-bootstrap-table-next';
import './AdminNewUserName.scss'

const tableColumns = [
  {
    dataField: 'index',
    text: 'id',
    hidden: true,
  },
  {
    dataField: 'name',
    text: 'NAME',
    headerClasses: 'tableHeader tableNarrowColumn',
    sort: true,
  }
];

function AdminNewUserNames() {

  const [newUserNames, setNewUserNames] = useState([]);
  const token = useAuthHeader()();

  useEffect(() => {
    async function getUserStatusCounts() {
      const response = await comm.get('/admin/users/newUserNames', token, null);
      var index = 0;
      setNewUserNames(response.data.map(name => ({
        index: index++,
        name
      })));
    }
    getUserStatusCounts();
  }, []);

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>New Users List</h4>
      </div>
      <div className='pageContent'>
        <BootstrapTable
          bootstrap4
          keyField="index"
          data={newUserNames}
          columns={tableColumns}
          bordered={false}
          noDataIndication="Table is Empty"
          rowClasses='tableRow'
        />
      </div>
    </div>
  );
}

export default AdminNewUserNames;
