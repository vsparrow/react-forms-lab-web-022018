import React from "react";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  // constructor(props) {
  constructor() {
    // super(props);     //this.props.onSubmit //gets called when the form is being submitted.
    super();     //this.props.onSubmit //gets called when the form is being submitted.
    this.state = {username: "", password: ""};
  }
  // handleInputChange = (event)=>{
  handleChangeUsername = (event)=>{
    // console.log("Hi");
    // console.log(event.target.value);
    // this.setState({username: event.target.value},()=>{    console.log(this.state.username);})
    this.setState({username: event.target.value})
  }
  handleChangePassword = (event)=>{
    // this.setState({password: event.target.value},()=>{console.log(this.state.password + "::" + this.state.username);})
    this.setState({password: event.target.value})
  }
  // handleSubmit = (event)=>{
  handleFormSubmit = event => {
  // handleFormSubmit = (event)=>{
    // event.preventDefault()
    event.preventDefault();
    let username = this.state.username
    let password = this.state.password
    // console.log(this.state.password.length);
    // if(this.state.password.length > 0 && this.state.username.length > 0)
    if(password.length > 0 && username.length > 0)
    // if(!this.state.username || !this.state.password)
    {
    // if (!username || !password) {

      // this.props.onSubmit(this.state.username,this.state.password)
      // this.props.onSubmit({this.state.username,this.state.password})
      this.props.onSubmit({username,password})
    }
  }
  // // You'll find two inputs in this component:
  //   <input type="text"> and <input type="password">.
  //   Make this a controlled component by adding the necessary props to these inputs.
  //   Their values should be saved in the component's state.
  // // An example of an input would look like:
  //   js <input id="test-username" type="text" name="username"
  //     value={this.state.username}
  //     onChange={this.handleInputChange} />
  // // Remember that you can retrieve the inpiut name and value of an event.target
  // from the JS event.
  // // Add the necessary event handler to the <form> element in order to call the
  // onSubmit callback prop.
  // // The onSubmit callback prop should only be called if both fields are filled in
  // (with any value).

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>

        <div>
          <label>
            Username
            <input id="test-username" type="text"  value={this.state.username} onChange={this.handleChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </label>
        </div>
        <div>
        {/*
          // <button type="submit" onClick=this.handleFormSubmit}>Log in</button>
          */}
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
