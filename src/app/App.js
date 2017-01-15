import React, { Component } from 'react';

const Message = props => {
  return (<h1>{props.message}</h1>);
}

class AForm extends Component {
  constructor(props){
    super(props);
    this.state = {message: ''};
  }
  render(){
    return (
      <div>
        <input type="text" 
        onChange={e => {
          const value = e.target.value;
          console.log(e.target.value);
          this.setState({message:value});
        }}/>
        <Message message={this.state.message} />
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello world!!:D!!!</h1>
        <Message message={'middlewarekick'} />
        <AForm />
      </div>
    );
  }
}