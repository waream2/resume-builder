import React from "react";
import InputMask from "react-input-mask";
import { useState } from "react";

const MaskedPhoneNumber = (props) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
    props.onChange(e)
  };

  return (
    <InputMask
      mask="(999) 999-9999"
      maskChar={null}
      value={props.savedPhoneNumber}
      onChange={onChange}
      maskPlaceHolder="Phone Number"
      placeholder="Phone Number"
      name="PhoneNumber"
    />
  );
};

export default MaskedPhoneNumber;
