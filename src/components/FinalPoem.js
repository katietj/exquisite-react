import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const poem = props.poem.map((line) => {
    return <p> {line} </p>
  });


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p>{props.displayPoem && poem}</p>
      </section>

      { !props.displayPoem && <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoem}/>
      </div>}
    </div>
  );
}

export default FinalPoem;
