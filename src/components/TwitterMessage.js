import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    let maxCharsFromProps = this.props.maxChars
    //props   this.props.maxChars  number representing the maximum amount of characters a message can have.
    this.state = {maxChars: maxCharsFromProps};
  }
  inputChanges = ()=>{
    // let maxCharsAdd = this.state.maxChars+1

    this.setState({maxChars: (this.state.maxChars)-1})
    console.log(this.state.maxChars);
  }
  render() {
    return (
      <div>
        <strong>Your message:characters left:{this.state.maxChars}</strong>
        <input type="text" onChange={this.inputChanges}/>
      </div>
    );
  }
}

export default TwitterMessage;
// You'll find an <input type="text"> in this component.
//   Make this a controlled component by adding the necessary props to the <input> element.
//   Its value should be saved in the component's state.
// Show the remaining characters in the component.
//   It doesn't matter how you render it, as long as the number is correct.
//   No need to guard against input that is too long — you can let the counter reach negative values.
