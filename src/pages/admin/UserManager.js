import React, { Component } from 'react';
import DataTable from '../../components/DataTable';

const users = [
    {
        "user_id": 1,
        "image": "img",
        "name": "Tejas Shah",
        "type": "Admin",
        "email": "a@a.com",
        "number": "8573139750",
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
        "number": "8573139750",
        "status": "Pending",
        "state": "Massachusetts",
        "city": "Boston"
    }
];

class UserManager extends Component {

    getColumnHeadings = () => {
        const columns = [];
        const obj = users[0];
        for(const objKey in obj) {
            columns.push({
                dataField: objKey,
                text: objKey,
                hidden: (objKey.includes("_id"))
            });
        }

        return columns;
    }

    render() {
        return (
            <div>
                Users
                <DataTable 
                    keyField="user_id"
                    columns={this.getColumnHeadings()} 
                    data={users} 
                />
            </div>
        )
    }
}

export default UserManager;