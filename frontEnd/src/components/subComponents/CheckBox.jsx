import React from "react";

function CheckBox({ name, value, setValue, index }) {
  return (
    <label forhtml={value} className="flex">
      <input
        type="checkbox"
        className="check"
        id={index}
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
      <p className="mx-3">{name}</p>
    </label>
  );
}

export default CheckBox;
