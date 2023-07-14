import React from 'react';
import Select from 'react-select';
import { data } from './dropdownOptions';
import { customStyles } from './dropdownStyles';
const SearchDropdown: React.FC = () => {

return (
    <div>
      <Select
        options={data}
        placeholder="Search"
        isSearchable
        styles={customStyles}
        components={{
          Option: ({ innerProps, label, data }) => (
            <div {...innerProps} className="dropdown-font">
              {data.img && (
                <img src={data.img} alt={label} style={customStyles.optionImage} />
              )}
              <span>{data.label}</span>
              <span>{data.value}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default SearchDropdown;
