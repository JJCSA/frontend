import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import './DataTable.scss';

class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = { sizePerPage: 10 };
    }

    render() {

        const sizePerPageRenderer = ({
            options,
            currSizePerPage,
            onSizePerPageChange
          }) => (
              <span>
                  Show
                    <input 
                        type="number"
                        min="10"
                        max="50" 
                        step="5"
                        value={this.state.sizePerPage}
                        onChange={ (e) => {
                            this.setState({sizePerPage: e.target.value});
                            onSizePerPageChange(e.target.value);
                            e.preventDefault();
                        }}
                    />
                  entries
              </span>
          );
          
          const options = {
            sizePerPageRenderer
          };

        const rowClasses = 'tableRow';

        return(
            <BootstrapTable
                keyField={this.props.keyField}
                data={this.props.data}
                columns={this.props.columns}
                bordered={false}
                noDataIndication="Table is Empty"
                rowClasses={rowClasses}
                pagination={ paginationFactory(options) }
            />
        );
    }
}

export default DataTable;
