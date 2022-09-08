import React from "react";

const DogImage = (props) => {

    const { imageSourceUrl } = props

    return (<img src={imageSourceUrl}></img>)
}

export default DogImage 