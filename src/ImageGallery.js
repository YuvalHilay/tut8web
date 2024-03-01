// ImageGallery.js

import React, { useState } from 'react';

const ImageGallery = () => {
    // Generate image objects for main images and thumbnails
    const imageIds = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
    const imageSize = '500/500';
    const thumbnailSize = '50/50';

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [images] = useState(imageIds.map(id => ({
        id: id,
        url: `https://picsum.photos/id/${id}/${imageSize}`,
        thumbnailUrl: `https://picsum.photos/id/${id}/${thumbnailSize}`
    })));

    const selectImage = (index) => {
        setSelectedIndex(index);
    };

    const nextImage = () => {
        setSelectedIndex((selectedIndex + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <h1>React Image Viewer Yuval Hilai 318609237</h1>

            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.thumbnailUrl}
                        className={index === selectedIndex ? 'thumbnail selected' : 'thumbnail'}
                        onClick={() => selectImage(index)}
                        alt={`Thumbnail ${index}`}
                    />
                ))}
            </div>

            <div className="main-image">
                <img
                    src={images[selectedIndex].url}
                    alt={`Image ${selectedIndex}`}
                />
            </div>

            <div className="button-container">
                <button onClick={prevImage} disabled={selectedIndex === 0}>Previous</button>
                <button onClick={nextImage} disabled={selectedIndex === images.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default ImageGallery;
