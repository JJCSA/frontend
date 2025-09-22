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

  handleOnSelect(row, isSelect) {
    if (isSelect) {
      this.setState(prevState => ({
        selected: [...prevState.selected, row.form_id],
      }));
    } else {
      this.setState(prevState => ({
        selected: prevState.selected.filter(x => x !== row.form_id),
      }));
    }
  }

  handleOnSelectAll(isSelect, rows) {
    const ids = rows.map(r => r.form_id);
    if (isSelect) {
      this.setState(prevState => ({
        ...prevState,
        selected: ids,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        selected: [],
      }));
    }
  }

  render() {
    const { sizePerPage, selected } = this.state;
    const { keyField, data, columns } = this.props;

    const sizePerPageRenderer = ({ onSizePerPageChange }) => (
      <span className="sizePerPage">
        Show
        <input
          type="number"
          min="10"
          max="50"
          step="5"
          value={sizePerPage}
          onChange={e => {
            this.setState(() => ({ sizePerPage: e.target.value }));
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
      selected,
      onSelect: this.handleOnSelect,
      onSelectAll: this.handleOnSelectAll,
    };

    const rowClasses = 'tableRow';

    return (
      <div>
        <BootstrapTable
          keyField={keyField}
          data={data}
          columns={columns}
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
