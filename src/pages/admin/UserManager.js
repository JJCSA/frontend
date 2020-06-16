import React, { Component } from 'react';
import DataTable from '../../components/DataTable';

class UserManager extends Component {

    

    render() {
        const users = [
            {
                "user_id": 1,
                "image": "img",
                "firstName": "Tejas",
                "lastName": "Shah",
                "email": "a@a.com"
            }
        ];
        return (
            <div>
                Users
                <DataTable users={users} />
            </div>
        )
    }
}

export default UserManager;