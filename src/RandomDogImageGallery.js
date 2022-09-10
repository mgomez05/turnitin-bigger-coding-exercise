import React from "react";
import { getPrettyBreedName } from './prettyBreedName';

const RandomDogImageGallery = (props) => {

    const { dogImageObjects } = props

    // If there are dog images to display, display them
    if (dogImageObjects.length > 0) {
        return (
            <div className="galleryContainer">
                { dogImageObjects.map((dogImageObject, index) => (
                    <div className="gallery" key={index}>
                        <img src={dogImageObject.url} alt={"Couldn't Load Random Dog #" + index + "!"}></img>
                        <h3>{getPrettyBreedName(dogImageObject.breed)}</h3>
                    </div>
                ))}
            </div>
        )
    }

    // Otherwise, if there are no dog images, show an error message
    else {
        return (
            <div>
                <h3 id="tenDogsErrorMessage">Couldn't Load Your Random Dogs Pictures!</h3>
                <h4>Please try again later</h4>
            </div>

        )
    }
}

export default RandomDogImageGallery