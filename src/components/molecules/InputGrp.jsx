import React from "react";

function InputGrp({ children, type, placeholder,disabled }) {
  return (
    <div className="flex flex-col w-[100%] items-center justify-center">
      <label htmlFor={children} className="text-base self-start">
        {children}
      </label>
      <input
        type={type}
        name={children}
        placeholder={placeholder}
        className="border-[var(--color-secondary)] text-black border-2 p-3 rounded-xl w-[100%] outline-[var(--color-secondary)]"
        disabled={disabled}
      />
    </div>
  );
}

export default InputGrp;
