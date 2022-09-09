import React from "react";
import { getPrettyBreedName } from './prettyBreedName';

const DogImageList = (props) => {

    const { dogImageObjects } = props

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

export default DogImageList