'use client'
import { sculptureList } from './data.js'
import { useState } from 'react';

// But this one uses state and works:
export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleForwardClick() {
        setIndex(index === sculptureList.length - 1 ? index : index + 1);
    }

    function handleBackClick() {
        setIndex(index == 0? index : index - 1)
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleBackClick}>
                Back
            </button>
            <button onClick={handleForwardClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i> 
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
            src={sculpture.url}
            alt={sculpture.alt}
            />
            <br />
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <p>
                {showMore && sculpture.description}
            </p>
        </>
    )
}