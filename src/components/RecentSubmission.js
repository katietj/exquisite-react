import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  const poem = props.poem.map((line) => {
    return line
  })

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{  poem.pop()  }</p>
    </div>
  );
}



RecentSubmission.PropTypes = {
  poem: PropTypes.array,
  displayPoem: PropTypes.bool,
}

export default RecentSubmission;
