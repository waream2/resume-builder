import React from "react";
import uniqid from "uniqid";
// import "./styles/EntryPage.css";

const ResumePreview = (props) => {
  return (
    <div className="MainBody">
      <div className="AppHeader">
        <h1 className="AppHeader"> Resume Preview</h1>
        <button
          id="PreviewButton"
          className="PreviewButton"
          onClick={props.editResume}
        >
          Edit
        </button>
      </div>
      <div className="SubBody">
        <div className="MainContainer">
          <div className="ContentContainer">
            <h2 className="FirstLastName">{props.FirstName}&nbsp;</h2>
            <h2 className="FirstLastName">{props.LastName}</h2>
          </div>
          <div className="ContentContainer">
            <h3 className="FirstLastName">{props.Email}&nbsp;</h3>
            <h3> | </h3>
            <h3 className="FirstLastName">&nbsp; {props.PhoneNumber} </h3>
          </div>
          <div className="ContentContainer">
            <h2 className="FirstLastName">Bio</h2>
          </div>
          <div className="ContentContainer">
            <span className="BioText">{props.Bio}</span>
          </div>
          <div className="ContentContainer">
            <h2 className="FirstLastName">Education</h2>
          </div>
          <>
            {props.Educations.map((item, i) => {
              return (
                <div className="EducationContainer" key={uniqid()}>
                  <div className="DeleteRow">
                    <span className="EducationDetail">{item.SchoolName}</span>
                    <i
                      className="fas fa-trash BlueTrashCan"
                      onClick={() => props.deleteEducation("Education", i)}
                    ></i>
                  </div>
                  <span className="EducationDetail">{item.Major}</span>
                  <span className="EducationDetail">{item.GraduationDate}</span>
                  <span className="EducationDetail">GPA: {item.GPA}</span>
                </div>
              );
            })}
          </>
          <div className="ContentContainer">
            <h2 className="FirstLastName Experience">Experience</h2>
          </div>
          <>
            {props.Experiences.map((item, i) => {
              return (
                <div className="EducationContainer" key={uniqid()}>
                  <div className="DeleteRow">
                    <span className="EducationDetail">{item.Employer}</span>
                    <i
                      id="DeleteEducation"
                      className="fas fa-trash BlueTrashCan"
                      onClick={() => props.deleteExperience("Experience", i)}
                    ></i>
                  </div>
                  <span className="EducationDetail">{item.Title}</span>
                  <span className="EducationDetail">
                    Start Date: {item.StartDate}
                  </span>
                  <span className="EducationDetail">
                    End Date: {item.EndDate}
                  </span>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
