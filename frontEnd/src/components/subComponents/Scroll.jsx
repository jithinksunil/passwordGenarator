import React from "react";

function Scroll({ value,setValue }) {
  return (
    <input
      type="range"
      min="6"
      max="20"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="mx-2"
    />
  );
}

export default Scroll;
