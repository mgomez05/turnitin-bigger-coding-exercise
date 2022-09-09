import React from "react";

const DogImageList = (props) => {

    const { dogImageObjects } = props

    return (
        <div>
            { dogImageObjects.map(dogImageObject => (
                <div key={dogImageObject.url}>
                    <img src={dogImageObject.url}></img>
                    <p className="desc">{dogImageObject.breed}</p>
                </div>
            ))}
        </div>
    )
}

export default DogImageList