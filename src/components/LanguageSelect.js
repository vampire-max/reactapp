import React, { useEffect, useRef, useState } from "react";
import "../styles/select.css";

const LANGUAGES = ["America", "Canada", "German", "Arabic French", "Filipino"];

const LanguageSelect = (ref) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Select language");
  const list = useRef();
  const useOutsideHidden = (ref) => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        // alert("click");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  };

  useOutsideHidden(list);
  return (
    <div className="">
      <button
        type="button"
        className="select-btn"
        onClick={() => setOpen(!open)}
      >
        <div className="select-input">
          <span>{value}</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            ></path>
          </svg>
        </div>
      </button>
      <ul
        ref={list}
        className="FormElement_options"
        style={{ display: open ? "block" : "none" }}
        onClick={(e) => {
          setOpen(false);
          console.log(e);
        }}
      >
        {LANGUAGES.map((lang) => (
          <li className="select-list" onClick={() => setValue(lang)} key={lang}>
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelect;
