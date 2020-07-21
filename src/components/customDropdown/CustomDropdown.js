import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const CustomDropdown = ({ values, title, onSelectCallback, itemLabel }) => {
    return (
        <DropdownButton
          title={title}
          onSelect={onSelectCallback}
        >
          {values.map((value, index) => (
            <Dropdown.Item
              key={index}
              eventKey={value}
              label={itemLabel}
            >
              {value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
    );
};


CustomDropdown.propTypes = {
    values: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onSelectCallback: PropTypes.func,
    itemLabel: PropTypes.string
};


export default CustomDropdown;
