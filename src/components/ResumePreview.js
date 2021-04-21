import React from 'react';
import uniqid from "uniqid"
import './EntryPage.css';




class ResumePreview extends React.Component {

    render() {
        const {FirstName, LastName, Email, PhoneNumber, Bio, Educations, deleteEducation, Experiences, deleteExperience } = this.props
        return(
            <div className='MainBody'>
                <div className="AppHeader">
                    <h1 className="AppHeader"> Resume Preview</h1>
                    <button id='PreviewButton' className='PreviewButton' onClick={this.props.editResume}>Edit</button>
            </div>
            <div className='SubBody'>
            <div className='MainContainer'>
                <div className='ContentContainer'>
                    <h2 className='FirstLastName'>{FirstName}&nbsp;</h2>
                    <h2 className='FirstLastName'>{LastName}</h2>
                </div>
                <div className='ContentContainer'>
                    <h3 className='FirstLastName'>{Email}&nbsp;</h3>
                    <h3> | </h3>
                    <h3 className='FirstLastName'>&nbsp; {PhoneNumber} </h3>
                </div>
                <div className='ContentContainer'>
                    <h2 className='FirstLastName'>Bio</h2>
                </div>
                <div className='ContentContainer'>
                    <span className='BioText'>{Bio}</span>
                </div>
                <div className='ContentContainer'>
                    <h2 className='FirstLastName'>Education</h2>
                </div>
                <div>
                    {Educations.map((task, i) => {
                        return  <div className='EducationContainer' id={uniqid()}>
                                    <div className='DeleteRow'>
                                        <span className='EducationDetail'>{Educations[i].SchoolName}</span>
                                        <i className="fas fa-trash BlueTrashCan" onClick={deleteEducation} tabIndex={i}></i>
                                    </div>
                                    <span className='EducationDetail'>{Educations[i].Major}</span>
                                    <span className='EducationDetail'>{Educations[i].GraduationDate}</span>
                                    <span className='EducationDetail'>GPA: {Educations[i].GPA}</span>
                                </div>
                    })}
                </div>
                <div className='ContentContainer'>
                    <h2 className='FirstLastName Experience'>Experience</h2>
                </div>
                <div>
                    {Experiences.map((task, i) => {
                        return  <div className='EducationContainer' id={uniqid()}>
                                    <div className='DeleteRow'>
                                        <span className='EducationDetail'>{Experiences[i].Employer}</span>
                                        <i className="fas fa-trash BlueTrashCan" onClick={deleteExperience} tabIndex={i}></i>
                                    </div>
                                    <span className='EducationDetail'>{Experiences[i].Title}</span>
                                    <span className='EducationDetail'>Start Date: {Experiences[i].StartDate}</span>
                                    <span className='EducationDetail'>End Date: {Experiences[i].EndDate}</span>
                                </div>
                    })}
                </div>
            </div>    
        </div>  
        </div> 
        )
    }
}

export default ResumePreview