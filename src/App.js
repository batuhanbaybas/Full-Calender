import React, { Component } from 'react'
import Calendar from './component/Calendar'

export default class App extends Component {
  state = {
    seen: false
  };
  render() {
    return (
      <div className="demo-app">
        <Calendar/>
      </div>
    )
  }
}
