import React, { useState, useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Modal, Button } from 'react-bootstrap';
import comm from '../../../../helpers/communication';
import Avatar from '../../../../components/avatar/Avatar';
import JJCSearchModal from '../jjcsearchModal/JJCSearchModal';
import FilterOption from './FilterOption';
import { regionalContact } from '../../../../assets/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import './JJCSearch.scss';

function JJCSearch() {
  const [userlist, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);
  const [modalInfo, setModalInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState(false);
  const token = useAuthHeader()();
  const ImageFormatter = cell => {
    const imgLinkRegex = RegExp('(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)');
    const validImg = imgLinkRegex.test(cell);
    return <Avatar imgSrc={validImg ? cell : ''} avatarSize="small" />;
  };
  const columns = [
    {
      dataField: 'userId',
      text: 'userId',
      hidden: true,
    },
    {
      dataField: 'profilePicture',
      text: 'Profile',
      headerClasses: 'tableHeader tableNarrowColumn',
      formatter: ImageFormatter,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      formatter: (cell, row) => {
        return row.isRegionalContact ? (
          <>
            {row.name} <img src={regionalContact} alt="regional-contact" />
          </>
        ) : (
          `${row.name}`
        );
      },
      filter: textFilter({
        onFilter: (filterValue, data) => {
          return data.filter(row => {
            const name = `${row.name}`;
            return name.toLowerCase().includes(filterValue.toLowerCase());
          });
        },
      }),
    },
    {
      dataField: 'state',
      text: 'State',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'city',
      text: 'City',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'specialization',
      text: 'Field of Study',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'universityName',
      text: 'University',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'workRole',
      text: 'Work Role',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'isRegionalContact',
      text: 'Regional Contact',
      hidden: true,
    },
    {
      dataField: 'aboutMe',
      text: 'About Me',
      hidden: true,
    },
  ];

  const handlePageChange = (page, sizePerPage) => {
    setCurrentPage(page);
  };

  const handleSizePerPageChange = sizePerPage => {
    setSizePerPage(sizePerPage);
    setCurrentPage(1);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const toggleTrueFalse = () => {
    setShowModal(handleShow());
  };
  const handleFilterChange = () => {
    setFilters(!filters);
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setModalInfo(row);
      toggleTrueFalse();
    },
  };
  const paginationOptions = {
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '20', value: 20 },
      { text: 'All', value: userlist.length },
    ],
    onPageChange: handlePageChange,
    onSizePerPageChange: handleSizePerPageChange,
  };
  const ModalContent = () => (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      dialogClassName="my-modal"
    >
      <Modal.Body>
        <JJCSearchModal data={modalInfo} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {' '}
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  useEffect(() => {
    async function getJJCSearchList() {
      const response = await comm.get('/user/search', token, null);
      const userList = response.data;
      const filteredList = filters
        ? userList.filter(i => i.isRegionalContact === true)
        : userList;
      setUserList(filteredList);
    }
    getJJCSearchList();
  }, [token, filters]);

  return (
    <div className="JJCSearchPage">
      <div id="jjc-search" className="JJCSearch">
        <div className="bg-table">
          <div className="table-users">
            <FilterOption
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
            <div className="table-responsive">
              <BootstrapTable
                keyField="userId"
                columns={columns}
                data={userlist}
                pagination={paginationFactory(paginationOptions)}
                filter={filterFactory()}
                bootstrap4
                noDataIndication="Table is Empty"
                rowEvents={rowEvents}
                rowClasses="clickable-row"
                onTableChange={(type, { page }) => {
                  if (type === 'pagination') {
                    handlePageChange(page, sizePerPage);
                  } else if (type === 'sizePerPage') {
                    handleSizePerPageChange(sizePerPage);
                  }
                }}
              />
            </div>
            {show ? <ModalContent /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default JJCSearch;
