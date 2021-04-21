import React from 'react';
import './EntryPage.css';

class SubmitButton extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <button id='ExperienceSubmit' className='SectionSubmit' type='submit' onClick={this.props.onClick}>Submit</button>
        )
    }
}

export default SubmitButton