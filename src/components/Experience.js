import React from "react";
import { useState } from "react";
// import "./styles/EntryPage.css";

const Experience = (props) => {
  const [experienceError, setExperienceError] = useState("");

  const validateExperience = (e) => {
    e.preventDefault();

    if (
      props.employer === "" &&
      props.title === "" &&
      props.startDate === "" &&
      props.endDate === ""
    ) {
      setExperienceError("All Fields Must Have Values");
    } else if (
      props.employer.length === "" ||
      props.employer.trim().length === 0
    ) {
      setExperienceError("Employer Can't Be Blank");
    } else if (props.title === "" || props.title.trim().length === 0) {
      setExperienceError("Title Can't Be Blank");
    } else if (props.startDate === "" || props.startDate.trim().length === 0) {
      setExperienceError("Start Date Can't Be Blank");
    } else if (props.endDate === "" || props.endDate.trim().length === 0) {
      setExperienceError("End Date Can't Be Blank");
    } else {
      props.submitExperience(e);
      setExperienceError("");
    }
  };

  const clearError = () => {
    setExperienceError("");
  };

  return (
    <>
      <div className="FormHeader">
        <p>Experience</p>
      </div>
      <form
        className="FormSection"
        id="ExperienceForm"
        onSubmit={validateExperience}
      >
        <input
          name="employer"
          placeholder="Employer"
          onChange={props.onChange}
          value={props.employer}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <input
          name="title"
          placeholder="Title"
          onChange={props.onChange}
          value={props.title}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <input
          name="startDate"
          placeholder="Start Date"
          onChange={props.onChange}
          value={props.startDate}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <input
          name="endDate"
          placeholder="End Date (if still employed, enter Current)"
          onChange={props.onChange}
          value={props.endDate}
          autoComplete="off"
          type="text"
          className="Experience"
        ></input>
        <div className="ButtonContainer">
          <button id="ExperienceSubmit" className="SectionSubmit" type="submit">
            Submit
          </button>
          <button
            id="resetExperience"
            className="ClearFormButton"
            type="reset"
            onClick={(props.onClear, clearError)}
          >
            Clear
          </button>
        </div>
        <span className="ErrorCode">{experienceError}</span>
      </form>
    </>
  );
};

export default Experience;
