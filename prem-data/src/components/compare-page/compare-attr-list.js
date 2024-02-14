import React, { useState } from 'react';

export const CompareAttrList = ({ options, onCheckboxChange }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (option) => {
    const newCheckedItems = checkedItems.includes(option)
      ? checkedItems.filter((item) => item !== option)
      : [...checkedItems, option];
    setCheckedItems(newCheckedItems);
    onCheckboxChange(newCheckedItems);
  };

return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            checked={checkedItems.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};
