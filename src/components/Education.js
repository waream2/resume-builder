import React from "react";
import { useState } from "react";
// import "./styles/EntryPage.css";

const Education = (props) => {
  const [educationError, setEducationError] = useState("");

  const validateEducation = (e) => {
    e.preventDefault();

    if (
      props.schoolName === "" &&
      props.major === "" &&
      props.graduationDate === "" &&
      props.gpa === ""
    ) {
      setEducationError("All Fields Must Have Values");
    } else if (
      props.schoolName.length === "" ||
      props.schoolName.trim().length === 0
    ) {
      setEducationError("School Name Can't Be Blank");
    } else if (props.major === "" || props.major.trim().length === 0) {
      setEducationError("Major Can't Be Blank");
    } else if (
      props.graduationDate === "" ||
      props.graduationDate.trim().length === 0
    ) {
      setEducationError("Graduation Date Can't Be Blank");
    } else if (props.gpa === "" || props.gpa.trim().length === 0) {
      setEducationError("GPA Can't Be Blank");
    } else {
      props.submitEducation(e);
      setEducationError("");
    }
  };

  const clearError = () => {
    setEducationError("");
  };

  return (
    <>
      <div className="FormHeader">
        <p>Education</p>
      </div>
      <form
        className="FormSection"
        id="EducationForm"
        onSubmit={validateEducation}
      >
        <input
          name="schoolName"
          placeholder="School Name"
          onChange={props.onChange}
          value={props.schoolName}
          className="Education"
        ></input>
        <input
          name="major"
          placeholder="Major"
          onChange={props.onChange}
          value={props.major}
          type="text"
          className="Education"
        ></input>
        <input
          name="graduationDate"
          placeholder="Graduation Date"
          onChange={props.onChange}
          value={props.graduationDate}
          type="text"
          className="Education"
        ></input>
        <input
          name="gpa"
          placeholder="GPA"
          onChange={props.onChange}
          value={props.gpa}
          type="text"
          className="Education"
        ></input>

        <div className="ButtonContainer">
          <button id="EducationSubmit" className="SectionSubmit" type="submit">
            Submit
          </button>
          <button
            id="resetEducation"
            className="ClearFormButton"
            type="reset"
            onClick={(props.onClear, clearError)}
          >
            Clear
          </button>
        </div>
        <span className="ErrorCode">{educationError}</span>
      </form>
    </>
  );
};

export default Education;
