import React from "react";

function InputGrp({ children, type, placeholder }) {
  return (
    <div className="flex flex-col w-[100%] items-center justify-center" >
      <label htmlFor={children} className="text-base self-start">
        {children}
      </label>
      <input
        type={type}
        name={children}
        placeholder={placeholder}
        className="border-[var(--color-secondary)] text-[var(--color-tertiary)] border-2 p-3 rounded-xl w-[100%]"
      />
    </div>
  );
}

export default InputGrp;
