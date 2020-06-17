import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class DataTable extends Component {

    render() {
        return(
            <BootstrapTable
                keyField={this.props.keyField}
                data={this.props.data}
                columns={this.props.columns}
            />
        );
    }
}

export default DataTable;
