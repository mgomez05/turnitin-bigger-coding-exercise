import React from "react";
import { getPrettyBreedName } from './prettyBreedName';

const DogImageList = (props) => {

    const { dogImageObjects } = props

    return (
        <div>
            { dogImageObjects.map(dogImageObject => (
                <div className="gallery" key={dogImageObject.url}>
                    <img src={dogImageObject.url}></img>
                    <p className="desc">{getPrettyBreedName(dogImageObject.breed)}</p>
                </div>
            ))}
        </div>
    )
}

export default DogImageList