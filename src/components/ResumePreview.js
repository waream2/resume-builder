import React from "react";
import uniqid from "uniqid";

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
                <div className="EducationContainer" key={item.name+item.gpa}>
                  <div className="DeleteRow">
                    <span className="EducationDetail">{item.schoolName}</span>
                    <i
                      className="fas fa-trash BlueTrashCan"
                      onClick={() => props.deleteEducation("Education", i)}
                    ></i>
                  </div>
                  <span className="EducationDetail">{item.major}</span>
                  <span className="EducationDetail">{item.graduationDate}</span>
                  <span className="EducationDetail">GPA: {item.gpa}</span>
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
                    <span className="EducationDetail">{item.employer}</span>
                    <i
                      id="DeleteEducation"
                      className="fas fa-trash BlueTrashCan"
                      onClick={() => props.deleteExperience("Experience", i)}
                    ></i>
                  </div>
                  <span className="EducationDetail">{item.title}</span>
                  <span className="EducationDetail">
                    Start Date: {item.startDate}
                  </span>
                  <span className="EducationDetail">
                    End Date: {item.endDate}
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
