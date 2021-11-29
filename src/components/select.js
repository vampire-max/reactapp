import React from "react";
import { useState } from "react";
// import { useState } from 'react/cjs/react.production.min';
import option from "../constants/language";

const Select = () => {
  // useEffect(() => {
  //   console.log("option", option.value);
  // }, [option]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="select-container">
      <select className="select" onChange={(e) => console.log(e.target.value)}>
        {option.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
