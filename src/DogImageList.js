import React from "react";

const DogImageList = (props) => {

    const { dogImageObjects } = props

    return (
        <ul>
            { dogImageObjects.map(dogImageObject => (
                <li key={dogImageObject.url}>
                    <div>{dogImageObject.url}</div>
                    <div>{dogImageObject.breed}</div>
                </li>
            ))}
        </ul>
    )
}

export default DogImageList