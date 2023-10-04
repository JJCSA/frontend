import React from 'react';
import PropTypes from 'prop-types';
import './CustomTextBox.css';

const CustomTextBox = ({ value, label, placeholder, onChange }) => (
  <div className="inputContainer">
    <input
      value={value}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

CustomTextBox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomTextBox;
