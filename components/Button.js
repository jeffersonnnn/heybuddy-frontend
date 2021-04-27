import React from "react";

const Button = ({ type, customClass, children }) => {
  return (
    <button
      type={type}
      className={`font-workSans font-bold text-base max-w-full h-16 outline-none text-white bg-purple rounded-2xl ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
