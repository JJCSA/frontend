import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import './CustomDropdown.css';

const CustomDropdown = ({
  values,
  title,
  onSelectCallback,
  filterType,
  selectedValue,
}) => {
  const onDropdownSelect = eventKey => {
    onSelectCallback(eventKey, filterType);
  };

  return (
    <div>
      <Dropdown onSelect={onDropdownSelect}>
        <Dropdown.Toggle className="dropdownToggle">
          {selectedValue || title}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdownMenu">
          {values.map((value, index) => (
            <Dropdown.Item
              key={index}
              eventKey={value}
              className="dropdownItem"
            >
              {value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

CustomDropdown.propTypes = {
  values: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onSelectCallback: PropTypes.func,
  filterType: PropTypes.string,
  selectedValue: PropTypes.string,
};

export default CustomDropdown;
