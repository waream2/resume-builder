import React from "react";
import "./EntryPage.css";

class Experience extends React.Component {
  render() {
    const { onChange, submitExperience } = this.props;

    return (
      <div>
        <div className="FormHeader">
          <p>Experience</p>
        </div>
        <form className="FormSection" onSubmit={submitExperience}>
          <input
            id="Employer"
            placeholder="Employer"
            onChange={onChange}
            value={this.Employer}
            autoComplete="off"
          ></input>
          <input
            id="Title"
            placeholder="Title"
            onChange={onChange}
            value={this.Title}
            autoComplete="off"
          ></input>
          <input
            id="StartDate"
            placeholder="Start Date"
            onChange={onChange}
            value={this.StartDate}
            autoComplete="off"
          ></input>
          <input
            id="EndDate"
            placeholder="End Date (if still employed, enter Current)"
            onChange={onChange}
            value={this.EndDate}
            autoComplete="off"
          ></input>
          <div className="ButtonContainer">
            <button
              id="ExperienceSubmit"
              className="SectionSubmit"
              type="submit"
            >
              Submit
            </button>
            <button
              id="resetEducation"
              className="ClearFormButton"
              type="reset"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
