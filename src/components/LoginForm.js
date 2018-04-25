import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);     //this.props.onSubmit //gets called when the form is being submitted.

    this.state = {username: "", password: ""};
  }
  // handleInputChange = (event)=>{
  handleChangeUsername = (event)=>{
    // console.log("Hi");
    // console.log(event.target.value);
    this.setState({username: event.target.value},()=>{    console.log(this.state.username);})
  }
  handleChangePassword = (event)=>{
    this.setState({password: event.target.value},()=>{console.log(this.state.password + "::" + this.state.username);})
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    // console.log(this.state.password.length);
    if(this.state.password.length > 0 && this.state.username.length > 0)
    {
      this.props.onSubmit(this.state.username,this.state.password)
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
      <form>
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
          <button type="submit" onClick={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
