import React, { useState } from 'react';

export const Input = ({ label, defaultValue, required, onChange }) => {
  const [value, setValue] = useState(defaultValue || "");
  const [focus, setFocus] = useState(!defaultValue);

  return (
    <section>
      <label className={focus ? "active" : ""}>{label}</label>
      <input 
        className="email-input"
        value={value}
        required={required}
        type={"text"}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e);
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />  
    </section>
  );
};