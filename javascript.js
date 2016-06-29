//Import React and ReactDOM for use
import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";


//Set up initial text area value and it's markdown counterpart
var initial = "# React.js \n \n" +
"### Instructions: \n" +
"1. Type in or edit the Github type markdown in the box on the left. \n" +
"2. Watch as React automatically renders the markdown changes in the box on the right. \n \n" +
"### Skills Used in this Project: \n" +
"`React.js, Javascript, HTML, Bootstrap, CSS` \n \n" +
"### For a Markdown Cheatsheet: \n" +
"Visit: [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). \n";

var initial_mark = marked(initial);

//Set up input class
class Input extends React.Component {

  //Initialize the class and state
  constructor(props) {
    super(props);

    this.state = {
      output: initial_mark,
      initial: initial
    }

  } //End constructor

  //Establish function to handle text area change event
  //This function will change the React state when it's called
  onStateChange (event) {
    var output = marked(event);
    this.setState({ output: output, initial: event });
  };


  //Render/return the React component's JSX
  render() {

    return (
      <div>

        <div className="col-md-5 text-box">
          <textarea className="form-control" rows="25"
            value={this.state.initial}
            onChange={ event => this.onStateChange(event.target.value) }>
          </textarea>
        </div>

        <div className="col-md-7 output-text" dangerouslySetInnerHTML={{__html: this.state.output}}>

        </div>

      </div>

    );
  } //End render


} //End Input class


//Render the input component to the div class "app"
ReactDOM.render(<Input />, document.querySelector(".app"));

    
    
    





