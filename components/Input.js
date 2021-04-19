import React, { useState } from "react";

const Input = ({ customClass, label, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <div className="form-field">
      <label className="text-grey2 font-semibold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`bg-white h-16 outline-none placeholder-grey2::placeholder max-w-full text-bgColor p-4 font-bold rounded-2xl ${customClass}`}
      />
    </div>
  );
};

export default Input;
