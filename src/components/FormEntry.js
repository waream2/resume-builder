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
      <div className='SubBody'>
        <Profile
          onChange={props.handleProfileChange}
          savedFirstName={props.savedFirstName}
          savedLastName={props.savedLastName}
          savedEmail={props.savedEmail}
          savedPhoneNumber={props.savedPhoneNumber}
          profileError={props.profileError}

        />
        <Bio onChange={props.handleBioChange} savedBio={props.savedBio} />
        <Education
          onChange={props.handleEducationChange}
          submitEducation={props.onSubmitEducation}
          educationError={props.educationError}
          onClear={props.onClear}
          schoolName={props.schoolName}
          major={props.major}
          graduationDate={props.graduationDate}
          gpa={props.gpa}
        />
        <Experience
          onChange={props.handleExperienceChange}
          submitExperience={props.onSubmitExperience}
          experienceError={props.experienceError}
          onClear={props.onClear}
          employer={props.employer}
          title={props.title}
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </div>
    </div>
  );
};

export default FormEntry;
