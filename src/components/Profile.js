import React from 'react';
import './EntryPage.css';

class Profile extends React.Component {
  
    //KEEPING THIS HERE TO LAUGH AT IT. (LEARNING IS FUN)
    // handleChange = (e) => {
    //     if (e.target.id === 'FirstName') {
    //         this.setState({
    //             FirstName: e.target.value
    //         })
    //     }
    //     else if (e.target.id === 'LastName') {
    //         this.setState({
    //             LastName: e.target.value
    //         })
    //     }
    //     else if (e.target.id === 'Email') {
    //         this.setState({
    //             Email: e.target.value
    //         })
    //     }
    //     else if (e.target.id === 'PhoneNumber') {
    //         this.setState({
    //             PhoneNumber: e.target.value
    //         })
    //     }
    // }

    render() {
        const {onChange, savedFirstName, savedLastName, savedEmail, savedPhoneNumber } = this.props;

        return(
            <div>
                <div className="FormHeader"> 
            <p>Profile</p>
        </div> 
            <div className="FormSection">
                <input 
                    id='FirstName'  
                    placeholder='First Name'
                    onChange={onChange} 
                    value={savedFirstName}
                />
                <input 
                    id='LastName' 
                    placeholder='Last Name' 
                    onChange={onChange} 
                    value={savedLastName}
                />
                <input 
                    id='Email' 
                    placeholder='Email'
                    onChange={onChange}
                    value={savedEmail}
                />
                <input 
                    id='PhoneNumber' 
                    placeholder='Phone Number'
                    onChange={onChange}
                    value={savedPhoneNumber}
                />
            </div>  
        </div>
        )
    }
}

export default Profile