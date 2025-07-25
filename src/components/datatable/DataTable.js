import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import UserModal from '../userModal/UserModal';
import './DataTable.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizePerPage: 10,
      modalInfo: {},
      showModal: false,
      show: false,
    };
    this.updateUserTable = this.updateUserTable.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  updateUserTable(result) {
    this.handleClose();
    this.props.updateUserData(this.state.modalInfo.id, result);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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

    const rowClasses = 'tableRow';
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        this.setState({ modalInfo: row });
        toggleTrueFalse();
      },
    };

    const toggleTrueFalse = () => {
      this.setState({ showModal: this.handleShow() });
    };

    const ModalContent = () => (
      <Modal
        size="lg"
        show={this.state.show}
        onHide={this.handleClose}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <UserModal
            data={this.state.modalInfo}
            onsubmitUpdate={this.updateUserTable}
            token={this.props.token}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            {' '}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );

    return (
      <div>
        <BootstrapTable
          bootstrap4
          keyField={this.props.keyField}
          data={this.props.data}
          columns={this.props.columns}
          bordered={false}
          noDataIndication="Table is Empty"
          rowClasses={rowClasses}
          pagination={paginationFactory(options)}
          rowEvents={rowEvents}
        />
        {this.state.show ? <ModalContent /> : null}
      </div>
    );
  }
}

export default DataTable;
