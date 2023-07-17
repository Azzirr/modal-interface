import React, { useState } from 'react';
import SearchDropdown from '../SearchDropdown/SearchDropdown';
import InputMask from 'react-input-mask';

export default function Modal() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    setPhoneNumber('');
    setSelectedOption(null);
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  return (
    isOpen ? (
      <div className="modal">
        <div className="_content">
          <div className="_header">
            <h2>Change phone number</h2>
          </div>
          <div className="_subheader">
            <span>Provide new phone number</span>
          </div>
          <div className="_search-input">
            <SearchDropdown />
          </div>
          <div className="_inputs-box">
            <InputMask
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="_number"
              mask="999-999-999"
              type="text"
              placeholder="000-000-000"
            />
          </div>
          <div className="_buttons">
            <button className="_cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="_save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    ) : null
  );
}
