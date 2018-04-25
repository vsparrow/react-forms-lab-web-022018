import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {isValid: false, text: "",error: "This poem is not written in the right structure!"};
  }

  correctNumberOfLines=(array)=>{ return array.length === 3} ////   The poem has three lines.
  firstLine5words=(string)=>{return string.trim().split(" ").length ===5} //   The first line has five words.
  secondLine3words=(string)=>{if(string){return string.trim().split(" ").length ===3} else return false}//   The second line has three words.
  thirdLine5Words=(string)=>{if(string){return string.trim().split(" ").length ===5} else return false}//   The third line has five words.
  checkValid =()=>{
    let splitByLine = (this.state.text.split(/\r?\n/));
    let validator = (this.correctNumberOfLines(splitByLine)
        && this.firstLine5words(splitByLine[0])
        && this.secondLine3words(splitByLine[1])
        && this.thirdLine5Words(splitByLine[2])
    )
    console.log("VALID: "+ validator);
    this.setState({isValid: validator},()=>{console.log("state valid:",this.state.isValid);})
  }
  // errorOff=(valid)=>{
  //   if(valid){  this.setState({error: ""})}
  //   else{  this.setState({error: '<div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>'})}
  // }
  handleInputChange = (event)=>{
    // console.log(event.target.value);
    this.setState({text: event.target.value},()=>{
      // console.log(this.state.text);
      // console.log(this.state.text.split(""));
      // console.log(this.state.text.split(/\r?\n/));
      // let splitByLine = (this.state.text.split(/\r?\n/));
      // console.log(splitByLine);
      //if something
      // console.log("correctNumberOfLines:" +this.correctNumberOfLines(splitByLine));
      // console.log("firstLine5words:"+this.firstLine5words(splitByLine[0]));
      // console.log("secondLine3words:"+this.secondLine3words(splitByLine[1]));
      // console.log("thirdLine5Words:"+this.thirdLine5Words(splitByLine[2]));
      // this.errorOff (this.correctNumberOfLines(splitByLine)
      //     && this.firstLine5words(splitByLine[0])
      //     && this.secondLine3words(splitByLine[1])
      //     && this.thirdLine5Words(splitByLine[2])
      // )
      this.checkValid()
      // if (this.correctNumberOfLines(splitByLine)
      //     && this.firstLine5words(splitByLine[0])
      //     && this.secondLine3words(splitByLine[1])
      //     && this.thirdLine5Words(splitByLine[2])
      // )
      // //opem ok
      // {console.log("POEM OK");}
      // //else poem false
      // else {
      //   console.log("poem false");
      // }

    })//end callback from setState
  }
  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleInputChange}/>

          {/*this.state.error*/}
          {!this.state.isValid ? (
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
          ) : null}
      </div>
    );
  }
}

export default PoemWriter;


// You'll also find an error element in the markup.
//   This element should only be shown if the poem is not valid.
// The rules for a valid poem structure are as follows:
//   The poem has three lines.
//   The first line has five words.
//   The second line has three words.
//   The third line has five words.
// Be sure to account for users accidentally adding too many spaces!
//   This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing
//   if the user deletes all of their content from the textarea box
