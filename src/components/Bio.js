import React from 'react';
import './EntryPage.css';

class Bio extends React.Component {

  
    render() {
        const { onChange, savedBio } = this.props;
        return(
            <div>
                <div className="FormHeader"> 
                    <p>Bio</p>
                </div> 
                <div className="FormSection">
                    <input className="BioInput" 
                        id='Bio'  
                        placeholder='Max Word Count: 250 '
                        onChange={onChange}
                        value={savedBio}
                    />
                    <p className='WordCountError'></p>
                </div>  
            </div>
        )
    }
}

export default Bio