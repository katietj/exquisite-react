import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const formattedLine = `The ${props.displayLine.adj1}
    ${props.displayLine.noun1}
    ${props.displayLine.adv}
    ${props.displayLine.verb} the
    ${props.displayLine.adj2}
    ${props.displayLine.noun2}`;

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{  formattedLine  }</p>
    </div>
  );
}

export default RecentSubmission;
