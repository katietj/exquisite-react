import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const formattedPoem = props.poem.map((line) => {
    return ["The",line.adj1, line.noun1, line.adv, line.verb, "the", line.adj, line.noun2, "."].join('')
  })


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p>{props.displayPoem && formattedPoem}</p>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoem}/>
      </div>
    </div>
  );
}

export default FinalPoem;
