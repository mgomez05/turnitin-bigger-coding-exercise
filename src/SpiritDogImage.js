import React from "react";

const SpiritDogImage = (props) => {

    const { imageSourceUrl } = props

    return (<img id="spiritDogImage" src={imageSourceUrl} alt="Couldn't Load Your Spirit Dog!"></img>)
}

export default SpiritDogImage 