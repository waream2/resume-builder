import React from 'react';
import './EntryPage.css';

class EditButton extends React.Component {
   

    render() {
        return(
            <button id='PreviewButton' className='PreviewButton' onClick={this.props.onClick}>Edit</button>
        )
    }
}

export default EditButton