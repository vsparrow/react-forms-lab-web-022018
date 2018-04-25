import React from "react";
import PropTypes from "prop-types";

class TwitterMessage extends React.Component {
  constructor() {
    super()
    // console.log(this.props);
    // let maxCharsFromProps = this.props.maxChars
    let maxCharsFromProps = 140
    //props   this.props.maxChars  number representing the maximum amount of characters a message can have.
    this.state = {//maxChars: maxCharsFromProps,
      message: ""};
  }
  inputChanges = (event)=>{
    // let maxCharsAdd = this.state.maxChars+1

    // this.setState({maxChars: (this.state.maxChars)-1})
    this.setState({message: event.target.value},()=>{    console.log(this.state.message)})

  }
  render() {
    return (
      <div>
      {/*
        <strong>Your message:characters left:{this.state.maxChars}</strong>
        */}
        <strong>Your message</strong>

        <input type="text" value={this.state.message} onChange={this.inputChanges}/>
        <span>{this.props.maxChars - this.state.message.length}</span>

      </div>
    );
  }
}


TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};
export default TwitterMessage;
// You'll find an <input type="text"> in this component.
//   Make this a controlled component by adding the necessary props to the <input> element.
//   Its value should be saved in the component's state.
// Show the remaining characters in the component.
//   It doesn't matter how you render it, as long as the number is correct.
//   No need to guard against input that is too long — you can let the counter reach negative values.
