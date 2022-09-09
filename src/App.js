import React, {Component} from 'react'
import DogImage from './DogImage'
import DogImageList from './DogImageList'

class App extends Component {

  state = {
    randomDogImageUrl: "",
    tenRandomDogImageObjects: [],
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
      this.fetchTenRandomDogImages()
  }

  // Fetch multiple random dog images
  fetchTenRandomDogImages = () => {

    const randomDogImageUrl = " https://dog.ceo/api/breeds/image/random/10"

    let randomDogImageUrls = []

    fetch(randomDogImageUrl)
      .then((response) => response.json())
      .then((data) => {

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
      })
      .catch((err) => {
          console.log("There was an error getting the dog picture!")
      })
  }


  // Given the url of a dog picture from https://dog.ceo/api/breeds/image/random/,
  // it parses the breed name from the url and returns it 
  parseDogBreed = (url) => {

    // Parse the dog breed from the url
    let breedAndImagePartOfUrl = url.split('https://images.dog.ceo/breeds/')[1]
    let breed = breedAndImagePartOfUrl.split('/')[0]


    let newBreedName = this.getPrettyBreedName(breed) 

    console.log("new breed name: ", newBreedName)

    return newBreedName
  }

  getPrettyBreedName(breedName) {

    console.log("Getting breed ", breedName)

    let breedNameArray = breedName.split('-')

    if (breedNameArray.length === 1) {
      let name = breedNameArray[0]
      if (name === "mexicanhairless") return "Mexican Hairless"
      else if (name === "stbernard") return "St Bernard"
      else if (name === "germanshepherd") return "German Shepherd"
      else if (name === "cotondetulear") return "Coton de Tulear"
      else return this.firstLetterToUpperCase(breedNameArray[0])
    }
    else {

      switch(breedNameArray[0]) {

        case "australian": 
          return "Australian Shepherd"

        case "buhund":
          return "Norwegian Buhund"

        case "bulldog":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Bulldog"

        case "bullterrier":
          return "Staffordshire Bull Terrier"

        case "cattledog":
          return "Australian Cattle Dog"

        case "collie":
          return "Border Collie"

        case "corgi":
          return "Cardigan Corgi"

        case "dane":
          return "Great Dane"

        case "deerhound":
          return "Scottish Deerhound"

        case "elkhound":
          return "Norwegian Elkhound"

        case "lapphund":
          return "Finnish Lapphund"

        case "frise":
          return "Bichon Frisé"

        case "greyhound":
          return "Italian Greyhound"

        case "hound":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Hound"

        case "mastiff":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Mastiff"

        case "mountain":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Mountain"

        case "ovcharka":
          return "Caucasian Ovcharka"

        case "pinscher":
          return "Miniature Pinscher"

        case "pointer":
          if (breedNameArray[1] === "german") return "German Pointer"
          else return "German Longhaired Pointer"

        case "poodle":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Poodle"

        case "retriever":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Retriever"

        case "ridgeback":
          return "Rhodesian Ridgeback"

        case "schnauzer":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Schnauzer"
      
        case "setter":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Setter"

        case "sheepdog": 
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Sheepdog"

        case "spaniel":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Spaniel"

        case "springer":
          return "English Springer"

        case "terrier":
          return this.firstLetterToUpperCase(breedNameArray[1]) + " Terrier"

        case "waterdog":
          return "Spanish Water Dog"

        case "wolfhound":
          return "Irish Wolfhound"
        
        default:
          return this.firstLetterToUpperCase(breedNameArray[1]) + this.firstLetterToUpperCase(breedNameArray[0])
      }

    }
  }

  firstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {

    const { randomDogImageUrl, tenRandomDogImageObjects } = this.state

    return (
      <div className="RussApp">
        <h1>Hello, Turnitin World!</h1>

        <div className="spiritDogContainer">
          <h2>Here's Your Spirit Dog!</h2>
          <DogImage imageSourceUrl={randomDogImageUrl} />
        </div>

        <h2>Here Are Your 10 Random Dogs!</h2>
        <DogImageList dogImageObjects={tenRandomDogImageObjects} />
      </div>
    )
  }
}

export default App;
