import React from "react";
import ResumePreview from "./components/ResumePreview";
import FormEntry from "./components/FormEntry";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Experiences: [],
      Experience: {
        Employer: "",
        Title: "",
        StartDate: "",
        EndDate: "",
      },
      Educations: [],
      Education: {
        SchoolName: "",
        Major: "",
        GraduationDate: "",
        GPA: "",
      },
      Profile: {
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
      },
      Bio: "",
      Preview: false,
    };
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.showResume = this.showResume.bind(this);
    this.editResume = this.editResume.bind(this);
  }

  handleProfileChange = (e) => {
    const newProfile = { ...this.state.Profile };
    const currentState = newProfile;
    const { id, value } = e.target;
    currentState[id] = value;

    this.setState({
      Profile: currentState,
    });
  };

  handleBioChange = (e) => {
    const newBio = { ...this.state.Bio };
    const currentState = newBio;
    const { id, value } = e.target;
    currentState[id] = value;

    this.setState({
      Bio: currentState,
    });
  };

  handleEducationChange = (e) => {
    const newEducation = { ...this.state.Education };
    const currentState = newEducation;
    const { id, value } = e.target;
    currentState[id] = value;

    this.setState({
      Education: currentState,
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    const newEducations = [...this.state.Educations];
    newEducations.push(this.state.Education);
    console.log(newEducations);

    this.setState({
      Educations: newEducations,
      Education: {},
    });
  };

  handleExperienceChange = (e) => {
    const newExperience = { ...this.state.Experience };
    const currentState = newExperience;
    const { id, value } = e.target;
    currentState[id] = value;

    this.setState({
      Experience: currentState,
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    const newExperiences = [...this.state.Experiences];
    newExperiences.push(this.state.Experience);
    console.log(newExperiences);

    this.setState({
      Experiences: newExperiences,
      Experience: {},
    });
  };

  deleteEducation = (e) => {
    console.log(e.target);
    const filteredEducations = this.state.Educations.filter(
      (item, index) => index !== e.target.tabIndex
    );
    this.setState({
      Educations: filteredEducations,
    });
  };

  deleteExperience = (e) => {
    console.log("hello");
    const filteredExperiences = this.state.Experiences.filter(
      (item, index) => index !== e.target.tabIndex
    );
    this.setState({
      Experiences: filteredExperiences,
    });
  };

  showResume = (e) => {
    this.setState({
      Preview: true,
    });
  };

  editResume = (e) => {
    this.setState({
      Preview: false,
    });
  };

  render() {
    const { Preview } = this.state;

    if (Preview) {
      return (
        <ResumePreview
          FirstName={this.state.Profile.FirstName}
          LastName={this.state.Profile.LastName}
          Email={this.state.Profile.Email}
          PhoneNumber={this.state.Profile.PhoneNumber}
          Bio={this.state.Bio.Bio}
          Educations={this.state.Educations}
          deleteEducation={this.deleteEducation}
          Experiences={this.state.Experiences}
          deleteExperience={this.deleteExperience}
          editResume={this.editResume}
        />
      );
    } else {
      return (
        <FormEntry
          handleProfileChange={this.handleProfileChange}
          handleBioChange={this.handleBioChange}
          handleEducationChange={this.handleEducationChange}
          handleExperienceChange={this.handleExperienceChange}
          onSubmitEducation={this.onSubmitEducation}
          onSubmitExperience={this.onSubmitExperience}
          previewResume={this.showResume}
          savedFirstName={this.state.Profile.FirstName}
          savedLastName={this.state.Profile.LastName}
          savedEmail={this.state.Profile.Email}
          savedPhoneNumber={this.state.Profile.PhoneNumber}
          savedBio={this.state.Bio.Bio}
        />
      );
    }
  }
}

export default App;
