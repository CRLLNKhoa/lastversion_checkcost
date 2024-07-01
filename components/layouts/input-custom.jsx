import React from "react";

function InputCustom({value,onChangeValue }) {

  const handleChange = (val) => {
    onChangeValue(val);
  };

  return (
    <div className="h-10 rounded-md overflow-hidden">
      <input
        type="number"
        min={"0"}
        max={"999"}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="h-full w-full outline-none px-3"
      />
    </div>
  );
}

export default InputCustom;
