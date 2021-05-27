import React from "react";
import ResumePreview from "./components/ResumePreview";
import FormEntry from "./components/FormEntry";
import { useState } from "react";

const App = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [employer, setEmployer] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [gpa, setGpa] = useState("");
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "FirstName") {
      setFirstName(value);
    } else if (name === "LastName") {
      setLastName(value);
    } else if (name === "Email") {
      setEmail(value);
    } else if (name === "PhoneNumber") {
      setPhoneNumber(value);
    } else if (name === "Bio") {
      setBio(value);
    } else if (name === "schoolName") {
      setSchoolName(value);
    } else if (name === "major") {
      setMajor(value);
    } else if (name === "graduationDate") {
      setGraduationDate(value);
    } else if (name === "gpa") {
      setGpa(value);
    } else if (name === "schoolName") {
      setSchoolName(value);
    } else if (name === "employer") {
      setEmployer(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;

    if (id === "EducationForm") {
      const bundledEducation = {
        schoolName,
        major,
        graduationDate,
        gpa,
      };
      educations.push(bundledEducation);
      setEducations(educations);
      setSchoolName("");
      setMajor("");
      setGraduationDate("");
      setGpa("");
    } else if (id === "ExperienceForm") {
      const bundledExperience = {
        employer,
        title,
        startDate,
        endDate,
      };
      setExperiences(experiences.concat(bundledExperience));
      setEmployer("");
      setTitle("");
      setStartDate("");
      setEndDate("");
    }
  };

  const deleteItem = (itemType, i) => {
    if (itemType === "Education") {
      const tempEducations = [...educations];
      tempEducations.splice(i, 1);
      setEducations(tempEducations);
    } else {
      const tempExperiences = [...experiences];
      tempExperiences.splice(i, 1);
      setExperiences(tempExperiences);
    }
  };

  const toggle = () => {
    setPreview(preview === false ? true : false);
  };

  const onClear = (e) => {
    const { id } = e.target;
    if (id === "resetEducation") {
      setSchoolName("");
      setMajor("");
      setGraduationDate("");
      setGpa("");
    } else setEmployer("");
    setTitle("");
    setStartDate("");
    setEndDate("");
  };

  if (preview) {
    return (
      <ResumePreview
        FirstName={firstName}
        LastName={lastName}
        Email={email}
        PhoneNumber={phoneNumber}
        Bio={bio}
        Educations={educations}
        deleteEducation={deleteItem}
        Experiences={experiences}
        deleteExperience={deleteItem}
        editResume={toggle}
      />
    );
  } else {
    return (
      <FormEntry
        handleProfileChange={handleChange}
        onChange={handleChange}
        handleBioChange={handleChange}
        handleEducationChange={handleChange}
        handleExperienceChange={handleChange}
        onSubmitEducation={onSubmit}
        onSubmitExperience={onSubmit}
        previewResume={toggle}
        savedFirstName={firstName}
        savedLastName={lastName}
        savedEmail={email}
        savedPhoneNumber={phoneNumber}
        savedBio={bio}
        onClear={onClear}
        schoolName={schoolName}
        major={major}
        graduationDate={graduationDate}
        gpa={gpa}
        employer={employer}
        title={title}
        startDate={startDate}
        endDate={endDate}
        onPhoneChange={handleChange}
      />
    );
  }
};

export default App;
