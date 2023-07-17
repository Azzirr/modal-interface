import React from 'react';
import Select from 'react-select';
import { customStyles } from './dropdownStyles';
import { useQuery, useMutation } from 'react-query'; 

export default function SearchDropdown(){
  interface Item {
    id: number;
    altSpellings: string,
    label: string;
    flags: {
      png: string;
    };
  }
  const { data, isLoading, error } = useQuery<Item[]>('myData', () =>
    fetch('https://restcountries.com/v3.1/region/europe').then((res) => res.json())
  );

  if(isLoading){
    return <span>Loading...</span>
  }
  if(error){
    return <span>Error! Try again later.</span>
  }

return (
    <div>
      <Select
        options={data}
        placeholder="Search"
        isSearchable
        getOptionLabel={(option) => option.altSpellings[1]}
        styles={customStyles}
        components={{
          Option: ({ innerProps, label, data }) => (
            <div {...innerProps} className="dropdown-font">
              {data.flags.png && (
                <img src={data.flags.png} alt={label} style={customStyles.optionImage} />
              )}
              <span>{data.altSpellings[1]}</span>
            </div>
          ),
        }}

      />
    </div>
  );
};