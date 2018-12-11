import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: '',
      adj2: '',
      adv: '',
      noun1: '',
      noun2: '',
      verb: ''
    }
  }

  onChangeHandler = (event) =>{
    const updateState = {};

    const fieldName = event.target.name;
    const value = event.target.value;

    updateState[fieldName] = value;

    this.setState(updateState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm__form">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            <p>The</p>
            <input
              placeholder="adjective"
              className={this.state.adj1 < 1 ?"PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionForm__input"}
              name="adj1" id="adj1" value={this.state.adj1} onChange={this.onChangeHandler}
              type="text" />

              <input
                placeholder="noun"
                className={this.state.noun1 < 1 ?"PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionForm__input"}
                name="noun1" id="noun1" value={this.state.noun1} onChange={this.onChangeHandler}
                type="text" />

                <input
                  placeholder="adverb"
                  className={this.state.adv < 1 ?"PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionForm__input"}
                  name="adv" id="adv" value={this.state.adv} onChange={this.onChangeHandler}
                  type="text" />

                  <input
                    placeholder="verb"
                    className={this.state.verb < 1 ?"PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionForm__input"}
                    name="verb" id="verb" value={this.state.verb} onChange={this.onChangeHandler}
                    type="text" />

                    <p>the</p>
                    <input
                      placeholder="adjective"
                      className={this.state.adj2 < 1 ?"PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionForm__input"}
                      name="adj2" id="adj2" value={this.state.adj2} onChange={this.onChangeHandler}
                      type="text" />

                      <input
                        placeholder="noun"
                        className={this.state.noun2 < 1 ?"PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionForm__input"}
                        name="noun2" id="noun2" value={this.state.noun2} onChange={this.onChangeHandler}
                        type="text" />
                        <p>.</p>




          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
