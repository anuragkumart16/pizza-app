import React from "react";
import NavText from "./NavText";

function Btn({ children, styles, onclick ,disabled}) {
  return (
    <button
      onClick={onclick}
      className={`bg-[var(--color-primary)] ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} text-black text-sm px-4 py-2 rounded-full font-bold ${styles}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Btn;
