import React, {Component} from 'react'
import DogImage from './DogImage'

class App extends Component {

  state = {
    randomDogImageUrl: "",
  }

  componentDidMount() {
    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random"

    // Fetch a single random dog image that will be displayed to the user
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

      // Fetch the 10 random dog images
      this.fetchRandomDogImages()
  }

  // Fetch multiple random dog images
  fetchRandomDogImages = () => {

    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random"

    let randomDogImageUrls = []

    for(let i = 0;  i < 10; i++) {
    
        fetch(randomDogImageUrl)
          .then((response) => response.json())
          .then((data) => {

              randomDogImageUrls.push(data.message)
              console.log(randomDogImageUrls)
          })
          .catch((err) => {
              console.log("There was an error getting the dog picture!")
          })
    }

    
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
