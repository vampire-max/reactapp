import React, { useState } from 'react';

const Input = ({ label, defaultValue, required, onChange }) => {
  const [value, setValue] = useState(defaultValue || "");
  const [focus, setFocus] = useState(!defaultValue);

  return (
    <section>
      <label className={focus ? "input-label-focus" : "input-label"}>{label}</label>
      <input 
        className={focus ? "email-input-focus" : "email-input"}
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

export default Input;