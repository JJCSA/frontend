import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../datatable/DataTable.css';

class FormDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizePerPage: 10,
      selected: [],
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this);
  }

  handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      this.setState({
        selected: [...this.state.selected, row.form_id],
      });
    } else {
      this.setState({
        selected: this.state.selected.filter(x => x !== row.form_id),
      });
    }
  };

  handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.form_id);
    if (isSelect) {
      this.setState({
        ...this.state,
        selected: ids,
      });
    } else {
      this.setState({
        ...this.state,
        selected: [],
      });
    }
  };

  render() {
    const sizePerPageRenderer = ({
      options,
      currSizePerPage,
      onSizePerPageChange,
    }) => (
      <span className="sizePerPage">
        Show
        <input
          type="number"
          min="10"
          max="50"
          step="5"
          value={this.state.sizePerPage}
          onChange={e => {
            this.setState({ sizePerPage: e.target.value });
            onSizePerPageChange(e.target.value);
            e.preventDefault();
          }}
        />
        entries
      </span>
    );

    const options = {
      sizePerPageRenderer,
    };

    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      selected: this.state.selected,
      onSelect: this.handleOnSelect,
      onSelectAll: this.handleOnSelectAll,
    };

    const rowClasses = 'tableRow';

    return (
      <div>
        <BootstrapTable
          keyField={this.props.keyField}
          data={this.props.data}
          columns={this.props.columns}
          bordered={false}
          noDataIndication="Table is Empty"
          rowClasses={rowClasses}
          selectRow={selectRow}
          pagination={paginationFactory(options)}
        />
      </div>
    );
  }
}

export default FormDataTable;
