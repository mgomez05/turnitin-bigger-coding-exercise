import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="RussApp">
        <h1>Hello, Turnitin World!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))