import React, { useState } from "react";
import "../styles/select.css";

const LANGUAGES = [
  'America',
  'Canada',
  'German',
  'Arabic French',
  'Filipino'
]

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="">
      
        <button type="button" className="select-btn" onClick={() => setOpen(!open)}>
        <input  
      className="select-input"
      value={value}
      type="text" />
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"></path></svg>
        </button>
      <ul className="FormElement_options" style={{display: open ? "block" : "none"}} onClick={() => setOpen(true)}>
        {
          LANGUAGES.map(lang => (
            <li className="select-list"
              onClick={() => setValue(lang)}>{lang}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default LanguageSelect;