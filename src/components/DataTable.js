import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class DataTable extends Component {

    renderUser = (user) => {
        return (
            <tr key={user.user_id}>
                <td>{user.image}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    render() {
        const users = this.props.users;
        return(
            <Table striped bordered hover>
                <thead>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {users && users.map(this.renderUser)}
                </tbody>
            </Table>
        );
    }
}

export default DataTable;
