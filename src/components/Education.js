import React from "react";
// import "./styles/EntryPage.css";

const Education = (props) => {
  return (
    <>
      <div className="FormHeader">
        <p>Education</p>
      </div>
      <form
        className="FormSection"
        id="EducationForm"
        onSubmit={props.submitEducation}
      >
        <input
          name="SchoolName"
          placeholder="School Name"
          onChange={props.onChange}
          value={props.SchoolName}
          className="Education"
        ></input>
        <input
          name="Major"
          placeholder="Major"
          onChange={props.onChange}
          value={props.Major}
          type="text"
          className="Education"
        ></input>
        <input
          name="GraduationDate"
          placeholder="Graduation Date"
          onChange={props.onChange}
          value={props.GraduationDate}
          type="text"
          className="Education"
        ></input>
        <input
          name="GPA"
          placeholder="GPA"
          onChange={props.onChange}
          value={props.GPA}
          type="text"
          className="Education"
        ></input>
        {props.EducationError}
        <div className="ButtonContainer">
          <button id="EducationSubmit" className="SectionSubmit" type="submit">
            Submit
          </button>
          <button id="resetEducation" className="ClearFormButton" type="reset" onClick={props.onClear}>
            Clear
          </button>
        </div>
        <span className="ErrorCode">{props.educationError}</span>
      </form>
    </>
  );
};

export default Education;
