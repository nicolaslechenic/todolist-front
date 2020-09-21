import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();

    console.log(process.env.API_URL);

    // Etat
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    axios.get(`${process.env.API_URL}/greetings`)
      .then(res => {
        const message = res.data.message;
        this.setState({ message })
      })
  }


  // Rendu
  render () {
    let { message } = this.state;

    return (
      <div>
        {message}
      </div>
    )
  }
}

render(
  <App />, 
  document.getElementById('root')
)

