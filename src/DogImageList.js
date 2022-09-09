import React from "react";
import { getPrettyBreedName } from './prettyBreedName';

const DogImageList = (props) => {

    const { dogImageObjects } = props

    return (
        <div className="galleryContainer">
            { dogImageObjects.map(dogImageObject => (
                <div className="gallery" key={dogImageObject.url}>
                    <img src={dogImageObject.url}></img>
                    <h3>{getPrettyBreedName(dogImageObject.breed)}</h3>
                </div>
            ))}
        </div>
    )
}

export default DogImageList