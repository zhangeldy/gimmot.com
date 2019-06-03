import React from "react";
import { InputField } from "./InputStyle";

function Input({ label, labelSide, value, onChange, placeholder, ...rest }) {
  if (label) {
    return (
      <div className="flex items-center clearfix" {...rest}>
        <div style={{width: 'auto'}} className={`col col-5 px1 ${labelSide && "right-align"}`}>
          {label}
        </div>
        <div className="col col-7">
          <InputField
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

  return (
    <InputField placeholder={placeholder} value={value} onChange={onChange} />
  );
}

export default Input;
