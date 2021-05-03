import React from "react";
// import "./styles/EntryPage.css";

const Profile = (props) => {
  return (
    <form id="Profile">
      <div className="FormHeader">
        <p>Profile</p>
      </div>
      <div className="FormSection">
        <input
          name="FirstName"
          placeholder="First Name"
          onChange={props.onChange}
          value={props.savedFirstName}
          className="Profile"
          type="text"
        />
        <input
          name="LastName"
          placeholder="Last Name"
          onChange={props.onChange}
          value={props.savedLastName}
          className="Profile"
          type="text"
        />
        <input
          name="Email"
          placeholder="Email"
          onChange={props.onChange}
          value={props.savedEmail}
          className="Profile"
          type="text"
        />
        <input
          name="PhoneNumber"
          placeholder="Phone Number"
          onChange={props.onChange}
          value={props.savedPhoneNumber}
          className="Profile"
          type="text"
        />
      </div>
    </form>
  );
};

export default Profile;
