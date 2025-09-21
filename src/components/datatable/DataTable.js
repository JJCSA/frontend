import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Modal, Button } from 'react-bootstrap';
import UserModal from '../userModal/UserModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DataTable.css';

function DataTable({ data, columns: columnDefs, updateUserData }) {
  const [modalInfo, setModalInfo] = useState({});
  const [show, setShow] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const columns = useMemo(() => columnDefs, [columnDefs]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageSize,
        pageIndex: 0,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleRowClick = row => {
    setModalInfo(row.original);
    handleShow();
  };

  const updateUserTable = result => {
    updateUserData(modalInfo.id, result);
    handleClose();
  };

  const ModalContent = () => (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      dialogClassName="my-modal"
    >
      <Modal.Body>
        <UserModal data={modalInfo} onsubmitUpdate={updateUserTable}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span>
          Show{' '}
          <input
            type="number"
            min="10"
            max="50"
            step="5"
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="form-control d-inline-block"
            style={{ width: '80px' }}
          />{' '}
          entries
        </span>
        <span>
          Page `{table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}`
        </span>
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className="tableRow"
                onClick={() => handleRowClick(row)}
                style={{ cursor: 'pointer' }}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <Button
          variant="primary"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

      {show && <ModalContent />}
    </div>
  );
}

export default DataTable;
