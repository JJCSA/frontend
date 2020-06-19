import React, { Component } from 'react';
import DataTable from '../../components/datatable/DataTable';
import './UserManager.scss';

const users = [
    {
        "user_id": 1,
        "image": "img",
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
        "image": "img",
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

const tableColumns = [
    {
        dataField: 'user_id',
        text: 'user_id',
        hidden: true
    },
    {
        dataField: 'image',
        text: 'IMAGE',
        headerClasses: 'tableHeader tableNarrowColumn'
    },
    {
        dataField: 'name',
        text: 'NAME',
        headerClasses: 'tableHeader tableBroadColumn'
    },
    {
        dataField: 'type',
        text: 'TYPE',
        headerClasses: 'tableHeader tableNarrowColumn'
    },
    {
        dataField: 'email',
        text: 'EMAIL',
        headerClasses: 'tableHeader tableBroadColumn'
    },
    {
        dataField: 'number',
        text: 'NUMBER',
        headerClasses: 'tableHeader',
        formatter: phoneNumberFormatter
    },
    {
        dataField: 'status',
        text: 'STATUS',
        headerClasses: 'tableHeader',
        formatter: statusFormatter
    },
    {
        dataField: 'state',
        text: 'STATE',
        headerClasses: 'tableHeader'
    },
    {
        dataField: 'city',
        text: 'CITY',
        headerClasses: 'tableHeader'
    },
];

class UserManager extends Component {


    render() {
        return (
            <div className="pageContainer">
                <div className="pageHeader">
                    <h4>User Manager</h4>
                </div>
                <div className="pageContent">
                    <DataTable 
                        keyField="user_id"
                        columns={tableColumns} 
                        data={users} 
                    />
                </div>
                
            </div>
        )
    }
}

export default UserManager;