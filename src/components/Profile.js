import React from "react";
import MaskedPhoneNumber from "./phoneInput";
import { useState, useEffect } from "react";

const Profile = (props) => {
  const [firstNameSatisfied, setFirstNameSatisfied] = useState(true);
  const [lastNameSatisfied, setLastNameSatisfied] = useState(true);
  const [emailError, setEmailError] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    props.onChange(e);
    if (name === "FirstName") {
      if (value.length > 2) {
        setFirstNameSatisfied(true);
      } else if (value.length < 2) setFirstNameSatisfied(false);
    } else if (name === "LastName") {
      if (value.length > 2) {
        setLastNameSatisfied(true);
      } else if (value.length < 2) {
        setLastNameSatisfied(false);
      }
    }
  };

  const validateEmail = (e) => {
    const { value } = e.target;
    if (!value.includes('@') || !value.includes(".")) {
      setEmailError("Must be a valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <form id="Profile">
      <div className="FormHeader">
        <p>Profile</p>
      </div>
      <div className="FormSection">
        <input
          name="FirstName"
          placeholder="First Name"
          onChange={onChange}
          value={props.savedFirstName}
          className={firstNameSatisfied ? "Profile" : "Bad-Profile"}
          outline="none"
          type="text"
        />
        <input
          name="LastName"
          placeholder="Last Name"
          value={props.savedLastName}
          onChange={onChange}
          className={lastNameSatisfied ? "Profile" : "Bad-Profile"}
          type="text"
        />

        <input
          name="Email"
          placeholder="Email"
          onChange={props.onChange}
          value={props.savedEmail}
          className="Email"
          type="text"
          onBlur={validateEmail}
        />
        <span className="ErrorCode">{emailError}</span>

        <MaskedPhoneNumber
          onChange={props.onChange}
          savedPhoneNumber={props.savedPhoneNumber}
        />
      </div>
    </form>
  );
};

export default Profile;
