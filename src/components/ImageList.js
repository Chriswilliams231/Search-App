import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    console.log(props.images)
    const images = props.images.map((image) => {
        // image={image} is passed as a prop down to ImageCard
        return <ImageCard key={image.id} image={image} />
    })
    return <div className="image-list">{images}</div>;
}

export default ImageList