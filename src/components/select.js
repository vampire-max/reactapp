import React, { useEffect } from 'react';
import option from '../constants/language';

const Select = () => {
  // useEffect(() => {
  //   console.log("option", option.value);
  // }, [option]);

  return (
    <div className="select-container">
      <select className="select" onChange={e => console.log(e.target.value)}>
        {option.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  )
}

export default Select;