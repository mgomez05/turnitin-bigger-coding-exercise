import React, {Component} from 'react'
import DogImage from './DogImage'

class App extends Component {

  state = {
    randomDogImageUrl: "",
  }

  componentDidMount() {
    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random"

    fetch(randomDogImageUrl)
      .then((response) => response.json())
      .then((data) => {

          this.setState({
            randomDogImageUrl: data.message
          })
      })
      .catch((err) => {
        console.log("There was an error getting the dog picture!")
      })
  }

  render() {

    const { randomDogImageUrl } = this.state

    return (
      <div className="RussApp">
        <h1>Hello, Turnitin World!</h1>

        <DogImage imageSourceUrl={randomDogImageUrl} />
      </div>
    )
  }
}

export default App;
