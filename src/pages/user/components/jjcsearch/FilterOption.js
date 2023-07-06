import React from 'react';

const FilterOption = ({ filters, handleFilterChange }) => {
  return (
    <div className="filter-options">
      <div className="checkbox-group">
        <label
          className="filter-checkbox-label"
          htmlFor="regionalContactCheckbox"
        >
          <input
            type="checkbox"
            id="regionalContactCheckbox"
            name="regionalContact"
            checked={filters.regionalContact}
            onChange={handleFilterChange}
          />
          <span>Regional Contact</span>
        </label>
      </div>
    </div>
  );
};

export default FilterOption;
