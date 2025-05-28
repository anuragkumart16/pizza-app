import React from "react";
import NavText from "./NavText";

function SeconadryBtn({ children, styles, onclick }) {
  return (
    <button
      onClick={onclick}
      className={`bg-[var(--color-tertiary)] text-black text-sm px-4 py-2 rounded-full cursor-pointer font-bold ${styles} size-fit`}
    >
      {children}
    </button>
  );
}

export default SeconadryBtn;
