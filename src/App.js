import React, {Component} from 'react'

class App extends Component {


  componentDidMount() {
    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random"

    fetch(randomDogImageUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("here's the url", data.message)
      })
      .catch((err) => {
        console.log("There was an error getting the dog picture!")
      })
  }

  render() {
    return (
      <div className="RussApp">
        <h1>Hello, Turnitin World!</h1>
      </div>
    )
  }
}

export default App;
