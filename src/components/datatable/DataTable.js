import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import './DataTable.scss';

class DataTable extends Component {

    render() {

        const rowClasses = 'tableRow';

        return(
            <BootstrapTable
                keyField={this.props.keyField}
                data={this.props.data}
                columns={this.props.columns}
                bordered={false}
                noDataIndication="Table is Empty"
                rowClasses={rowClasses}
            />
        );
    }
}

export default DataTable;
