import React from "react";

const DogImage = (props) => {

    const { imageSourceUrl } = props

    return (<img src={imageSourceUrl} alt="Couldn't Load Your Spirit Dog!"></img>)
}

export default DogImage 