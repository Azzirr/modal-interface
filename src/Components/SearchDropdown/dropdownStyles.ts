export const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: '120px',
      height: '50px',
      fontSize: '14px',
      borderRadius: '6px',
      borderColor: state.isFocused ? '#5870E0' : provided.borderColor,
      boxShadow: state.isFocused ? '0 0 0 1px #5870E0' : provided.boxShadow,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    optionImage: {
      width: '22px',
      height: '16px',
      marginRight: '10px',
    },
    singleValue: (provided: any, state: any) => ({
      ...provided,
      fontSize: '14px',
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: 'none',
    }),
    menu: (provided: any) => ({
      ...provided,
      width: '260px',
      borderRadius: '6px'
    }),
  };
