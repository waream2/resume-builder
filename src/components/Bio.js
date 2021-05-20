import React from "react";

const Bio = (props) => {
  return (
    <>
      <div className="FormHeader">
        <p>Bio</p>
      </div>
      <div className="FormSection">
        <textarea
          className="Bio"
          name="Bio"
          id="Bio"
          placeholder="Max Word Count: 250 "
          onChange={props.onChange}
          value={props.savedBio}
          type="text"
        />
        <p className="WordCountError"></p>
      </div>
    </>
  );
};

export default Bio;
