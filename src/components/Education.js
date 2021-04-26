import React from "react";
import "./EntryPage.css";

class Eduction extends React.Component {
  render() {
    const { 
      onChange, 
      submitEducation 
    } = this.props;
    
    return (
      <div>
        <div className="FormHeader">
          <p>Education</p>
        </div>
        <form className="FormSection" onSubmit={submitEducation}>
          <input
            id="SchoolName"
            placeholder="School Name"
            onChange={onChange}
            value={this.Education}
          ></input>
          <input
            id="Major"
            placeholder="Major"
            onChange={onChange}
            value={this.Education}
          ></input>
          <input
            id="GraduationDate"
            placeholder="Graduation Date"
            onChange={onChange}
            value={this.Education}
          ></input>
          <input
            id="GPA"
            placeholder="GPA"
            onChange={onChange}
            value={this.Education}
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

export default Eduction;
