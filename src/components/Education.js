import React from "react";
import { useState } from "react";

const isThisEmpty = (field) => {
  if (field.trim().length === 0) {
    return true;
  }
};

const Education = (props) => {
  const [schoolNameError, setSchoolNameError] = useState("");
  const [majorError, setMajorError] = useState("");
  const [graduationDateError, setGraduationDateError] = useState("");
  const [gpaError, setGpaError] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const validateField = (e) => {
    const { value, name } = e.target;

    if (isThisEmpty(value)) {
      if (name === "schoolName") {
        setSchoolNameError("Empty School Name");
      } else if (name === "major") {
        setMajorError("Empty Major");
      } else if (name === "graduationDate") {
        setGraduationDateError("Empty Date");
      } else if (name === "gpa") {
        setGpaError("Empty GPA");
      }
    } else if (!isThisEmpty(value)) {
      if (name === "schoolName") {
        setSchoolNameError("");
      } else if (name === "major") {
        setMajorError("");
      } else if (name === "graduationDate") {
        setGraduationDateError("");
      } else if (name === "gpa") {
        setGpaError("");
      }
    }
  };

  const submitIfValidated = (e) => {
    e.preventDefault();
    if (
      props.schoolName !== "" &&
      props.major !== "" &&
      props.graduationDate !== "" &&
      props.gpa !== ""
    ) {
      props.submitEducation(e);
      setSubmissionError("");
    } else setSubmissionError("Can't Not Submit With Blank Fields");
  };

  const clearErrors = (e) => {
    props.onClear(e);
    setGpaError("");
    setSchoolNameError("");
    setMajorError("");
    setGraduationDateError("");
    setSubmissionError("");
  };

  return (
    <>
      <div className="FormHeader">
        <p>Education</p>
      </div>
      <form
        className="FormSection"
        id="EducationForm"
        onSubmit={submitIfValidated}
      >
        <input
          name="schoolName"
          placeholder="School Name"
          onChange={props.onChange}
          value={props.schoolName}
          className="Education"
          onBlur={validateField}
          autoComplete="off"
        ></input>
        <span className="ErrorCode">{schoolNameError}</span>
        <input
          name="major"
          placeholder="Major"
          onChange={props.onChange}
          value={props.major}
          type="text"
          className="Education"
          onBlur={validateField}
          autoComplete="off"
        ></input>
        <span className="ErrorCode">{majorError}</span>
        <input
          name="graduationDate"
          placeholder="Graduation Date"
          onChange={props.onChange}
          value={props.graduationDate}
          type="text"
          className="Education"
          onBlur={validateField}
          autoComplete="off"
        ></input>
        <span className="ErrorCode">{graduationDateError}</span>
        <input
          name="gpa"
          placeholder="GPA"
          onChange={props.onChange}
          value={props.gpa}
          type="text"
          className="Education"
          onBlur={validateField}
          autoComplete="off"
        ></input>
        <span className="ErrorCode">{gpaError}</span>

        <div className="ButtonContainer">
          <button id="EducationSubmit" className="SectionSubmit" type="submit">
            Submit
          </button>
          <button
            id="resetEducation"
            className="ClearFormButton"
            type="reset"
            onClick={clearErrors}
          >
            Clear
          </button>
        </div>
        <span className="ErrorCode">{submissionError}</span>
      </form>
    </>
  );
};

export default Education;
