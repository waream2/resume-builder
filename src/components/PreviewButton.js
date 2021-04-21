import React from 'react';
import './EntryPage.css';

class PreviewButton extends React.Component {
   

    render() {
        return(
            <button id='PreviewButton' className='PreviewButton' onClick={this.props.onClick}>Preview</button>
        )
    }
}

export default PreviewButton