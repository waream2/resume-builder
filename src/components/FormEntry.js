import React from "react";
import "./EntryPage.css";
import Profile from "./Profile";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";

class FormEntry extends React.Component {
  render() {
    return (
      <div className="MainBody">
        <div className="AppHeader">
          <h1 className="AppHeader"> Resume Builder</h1>
          <button
            id="PreviewButton"
            className="PreviewButton"
            onClick={this.props.previewResume}
          >
            Preview
          </button>
        </div>
        <div className="SubBody">
          <Profile
            onChange={this.props.handleProfileChange}
            savedFirstName={this.props.savedFirstName}
            savedLastName={this.props.savedLastName}
            savedEmail={this.props.savedEmail}
            savedPhoneNumber={this.props.savedPhoneNumber}
          />
          <Bio
            onChange={this.props.handleBioChange}
            savedBio={this.props.savedBio}
          />
          <Education
            onChange={this.props.handleEducationChange}
            submitEducation={this.props.onSubmitEducation}
          />
          <Experience
            onChange={this.props.handleExperienceChange}
            submitExperience={this.props.onSubmitExperience}
          />
        </div>
      </div>
    );
  }
}

export default FormEntry;
