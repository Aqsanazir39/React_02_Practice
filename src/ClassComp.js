import React, { Component } from 'react'

export default class ClassComp extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  Increase = ()=>{
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  Decrease = ()=>{
    this.setState({
      counter: this.state.counter - 1
    })
  }
  
  render() {

    return (
      <div>
<h1>{this.state.counter}</h1>
<button type='button'onClick={this.Increase} >Increase</button>
<button type='button' onClick={this.Decrease}>Decrease</button>
      </div>
    )
  }
}
