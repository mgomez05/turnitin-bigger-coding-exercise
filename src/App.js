import React, {Component} from 'react'
import SpiritDogImage from './SpiritDogImage'
import RandomDogImageGallery from './RandomDogImageGallery'

class App extends Component {

  state = {
    randomDogImageUrl: "",         // The URL of the Spirit Dog Image
    tenRandomDogImageObjects: [],  // The URL and Breed of the 10 Random Dog Images
  }

  // Called after the component is loaded into the DOM and rendered
  componentDidMount() {
    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random"

    // Fetch a single random dog image that will be displayed to the user
    fetch(randomDogImageUrl)
      .then((response) => response.json())
      .then((data) => {

          // Update the state with the random dog image url if the request was successful
          if (data.status === "success") {

            this.setState({
              randomDogImageUrl: data.message
            })
          }
      })
      .catch((err) => {
        console.log("There was an error getting the dog picture!")
      })

    // Fetch the 10 random dog images
    this.fetchTenRandomDogImages()
  }

  // Fetch multiple random dog images
  fetchTenRandomDogImages = () => {

    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random/10"

    fetch(randomDogImageUrl)
      .then((response) => response.json())
      .then((data) => {

          // Update the state with the random dog information if the request was successful
          if (data.status === "success") {
            
            // Convert the list of random dog urls
            // into objects, each with a url and breed
            let dogDataList = data.message 
            dogDataList = dogDataList.map((entry, index) => {

                return ({ 
                    url: entry,
                    breed: this.parseDogBreed(entry)
                })
              
            })

            // Update our state with the newly created list of random dog objects
            this.setState({
              tenRandomDogImageObjects: dogDataList
            })

          }
          
      })
      .catch((err) => {
          console.log("There was an error getting the dog picture!")
      })
  }


  // Given the url of a dog picture from GET https://dog.ceo/api/breeds/image/random/,
  // it parses the breed name from the url and returns it 
  parseDogBreed = (url) => {

    // Parse the dog breed from the url
    let breedAndImagePartOfUrl = url.split('https://images.dog.ceo/breeds/')[1]
    let breed = breedAndImagePartOfUrl.split('/')[0]

    return breed 
  }

  render() {

    const { randomDogImageUrl, tenRandomDogImageObjects } = this.state

    return (
      <div className="RandomDogApp">
        <h1>Hello Turnitin Team!</h1>

        <div className="spiritDogContainer">
          <h2>Here's Your Spirit Dog!</h2>
          <SpiritDogImage imageSourceUrl={randomDogImageUrl} />
        </div>

        <h2>Here Are Your 10 Random Dogs!</h2>
        <RandomDogImageGallery dogImageObjects={tenRandomDogImageObjects} />
      </div>
    )
  }
}

export default App;
