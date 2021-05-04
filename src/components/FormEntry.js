import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";

const FormEntry = (props) => {
  return (
    <div className="MainBody">
      <div className="AppHeader">
        <h1 className="AppHeader"> Resume Builder</h1>
        <button
          id="PreviewButton"
          className="PreviewButton"
          onClick={props.previewResume}
        >
          Preview
        </button>
      </div>
      <div className="SubBody">
        <Profile
          onChange={props.handleProfileChange}
          savedFirstName={props.savedFirstName}
          savedLastName={props.savedLastName}
          savedEmail={props.savedEmail}
          savedPhoneNumber={props.savedPhoneNumber}
        />
        <Bio onChange={props.handleBioChange} savedBio={props.savedBio} />
        <Education
          onChange={props.handleEducationChange}
          submitEducation={props.onSubmitEducation}
        />
        <Experience
          onChange={props.handleExperienceChange}
          submitExperience={props.onSubmitExperience}
        />
      </div>
    </div>
  );
};

export default FormEntry;
