// Given a dog breed name parsed from the url of 
// a dog picture, it turns the name into
// prettier name
//    - Capitalized first letters for each word
//    - No hyphens
//    - Correct Order of words 
//
// Ex. elkhound-norwegian -> Norwegian Elkhound
function getPrettyBreedName(breedName) {

  let breedNameArray = breedName.split('-')

  // If there was no hyphen in the breed name of the dog,
  // handle the edge cases, 
  // and default to capitalizing the first letter of the breed name 
  if (breedNameArray.length === 1) {

    let name = breedNameArray[0]

    if (name === "mexicanhairless") return "Mexican Hairless"
    else if (name === "stbernard") return "St Bernard"
    else if (name === "germanshepherd") return "German Shepherd"
    else if (name === "cotondetulear") return "Coton de Tulear"
    else return firstLetterToUpperCase(breedNameArray[0])
  }
  // Otherwise, handle the different edge cases for hyphened breed names,
  // defaulting to capitalizing the first letter of both words in the breed name
  // and reversing their order
  else {

    switch(breedNameArray[0]) {

      case "australian": 
        return "Australian Shepherd"

      case "buhund":
        return "Norwegian Buhund"

      case "bulldog":
        return firstLetterToUpperCase(breedNameArray[1]) + " Bulldog"

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
        return firstLetterToUpperCase(breedNameArray[1]) + " Hound"

      case "mastiff":
        return firstLetterToUpperCase(breedNameArray[1]) + " Mastiff"

      case "mountain":
        return firstLetterToUpperCase(breedNameArray[1]) + " Mountain"

      case "ovcharka":
        return "Caucasian Ovcharka"

      case "pinscher":
        return "Miniature Pinscher"

      case "pointer":
        if (breedNameArray[1] === "german") return "German Pointer"
        else return "German Longhaired Pointer"

      case "poodle":
        return firstLetterToUpperCase(breedNameArray[1]) + " Poodle"

      case "retriever":
        return firstLetterToUpperCase(breedNameArray[1]) + " Retriever"

      case "ridgeback":
        return "Rhodesian Ridgeback"

      case "schnauzer":
        return firstLetterToUpperCase(breedNameArray[1]) + " Schnauzer"
    
      case "setter":
        return firstLetterToUpperCase(breedNameArray[1]) + " Setter"

      case "sheepdog": 
        return firstLetterToUpperCase(breedNameArray[1]) + " Sheepdog"

      case "spaniel":
        return firstLetterToUpperCase(breedNameArray[1]) + " Spaniel"

      case "springer":
        return "English Springer"

      case "terrier":
        return firstLetterToUpperCase(breedNameArray[1]) + " Terrier"

      case "waterdog":
        return "Spanish Water Dog"

      case "wolfhound":
        return "Irish Wolfhound"
      
      default:

        return firstLetterToUpperCase(breedNameArray[1]) + firstLetterToUpperCase(breedNameArray[0])
    }
  }
}

// Returns <string> with its first letter turned into a capital letter
function firstLetterToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { getPrettyBreedName };