import React from "react";
import NavText from "./NavText";

function Btn({ children, styles, onclick }) {
  return (
    <button
      onClick={onclick}
      className={`bg-[var(--color-primary)] text-black text-sm px-4 py-2 rounded-full cursor-pointer font-bold ${styles}`}
    >
      {children}
    </button>
  );
}

export default Btn;
