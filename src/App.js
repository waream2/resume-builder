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
      Bio: {
        Bio: "",
      },
      Preview: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (e) => {
    const {
      Profile: newProfile,
      Bio: newBio,
      Education: newEducation,
      Experience: newExperience,
    } = { ...this.state };
    const { name, value, className } = e.target;

    if (className === "Profile") {
      newProfile[name] = value;
    } else if (className === "Bio") {
      newBio[name] = value;
    } else if (className === "Education") {
      newEducation[name] = value;
    } else if (className === "Experience") newExperience[name] = value;

    this.setState({
      Profile: newProfile,
      Bio: newBio,
      Education: newEducation,
      Experience: newExperience,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { Educations: newEducations, Experiences: newExperiences } = {
      ...this.state,
    };
    const { id } = e.target;

    if (id === "EducationForm") {
      newEducations.push(this.state.Education);
    } else if (id === "ExperienceForm") {
      newExperiences.push(this.state.Experience);
    }

    this.setState({
      Educations: newEducations,
      Education: {},
      Experiences: newExperiences,
      Experience: {},
    });
  };

  deleteItem = (itemType, i) => {
    const {
      Educations: filteredEducations,
      Experiences: filteredExperiences,
    } = { ...this.state };
    if (itemType === "Education") {
      filteredEducations.splice(i, 1);
    } else filteredExperiences.splice(i, 1);

    this.setState({
      Educations: filteredEducations,
      Experiences: filteredExperiences,
    });
  };

  toggle = () => {
    if (this.state.Preview) {
      this.setState({
        Preview: false,
      });
    } else
      this.setState({
        Preview: true,
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
          deleteEducation={this.deleteItem}
          Experiences={this.state.Experiences}
          deleteExperience={this.deleteItem}
          editResume={this.toggle}
        />
      );
    } else {
      return (
        <FormEntry
          handleProfileChange={this.handleChange}
          handleBioChange={this.handleChange}
          handleEducationChange={this.handleChange}
          handleExperienceChange={this.handleChange}
          onSubmitEducation={this.onSubmit}
          onSubmitExperience={this.onSubmit}
          previewResume={this.toggle}
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
