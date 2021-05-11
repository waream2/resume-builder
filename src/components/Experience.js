import React from "react";
// import "./styles/EntryPage.css";

const Experience = (props) => {
  return (
    <>
      <div className="FormHeader">
        <p>Experience</p>
      </div>
      <form
        className="FormSection"
        id="ExperienceForm"
        onSubmit={props.submitExperience}
      >
        <input
          name="Employer"
          placeholder="Employer"
          onChange={props.onChange}
          value={props.Employer}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <input
          name="Title"
          placeholder="Title"
          onChange={props.onChange}
          value={props.Title}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <input
          name="StartDate"
          placeholder="Start Date"
          onChange={props.onChange}
          value={props.StartDate}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <input
          name="EndDate"
          placeholder="End Date (if still employed, enter Current)"
          onChange={props.onChange}
          value={props.EndDate}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <div className="ButtonContainer">
          <button id="ExperienceSubmit" className="SectionSubmit" type="submit">
            Submit
          </button>
          <button id="resetExperience" className="ClearFormButton" type="reset" onClick={props.onClear}>
            Clear
          </button>
        </div>
        <span className="ErrorCode">{props.experienceError}</span>
      </form>
    </>
  );
};

export default Experience;
