import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class FormDataTable extends Component {
     
    
    render() {
        const options = {
            clearSearch: true,
            sortIndicator: true,
            noDataText: 'There are no forms created yet'
        };
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true  // enable click to select
          };
        console.log(this.props);
        return (
            <div>
                <BootstrapTable
                    bordered={ false }
                    data={this.props.data}
                    deleteRow={ true }
                    options={options}
                    pagination
                    selectRow={selectRowProp}
                    scrollTop={ 'Bottom' }
                    search={true}
                    trClassName="tableRow"
                >
                    {
                        this.props.columns.map(formColumn => {
                            return (
                                <TableHeaderColumn
                                    className="tableHeader"
                                    key={formColumn.dataField}
                                    dataField={formColumn.dataField}
                                    dataFormat={formColumn.dataFormat}
                                    isKey={formColumn.key}
                                    hidden={formColumn.key}
                                    dataSort={formColumn.sort}
                                    filter= {formColumn.filterType ? 
                                        { 
                                            type: formColumn.filterType, 
                                            delay: 100, 
                                            options: formColumn.options
                                        } : 
                                        null
                                    }
                                >
                                    {formColumn.dataField}
                                </TableHeaderColumn>
                            )  
                        })
                    }
                </BootstrapTable>
            </div>
        )
    }
}

export default FormDataTable;