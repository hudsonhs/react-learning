import { sculptureList } from './data.js'
import Gallery from './Gallery.jsx';

// This does not work as expected becuase it changes variables by not using state:
function GalleryWrong() {
    var index = 0;

    function handleClick() {
        index = index + 1;
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
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
            <p>
                {sculpture.description}
            </p>
        </>
    )
}

// Rendering the same component twice, each copy has its own isolated state:
export default function App() {
    return (
        <>
            <Gallery />
            <Gallery />
        </>
    )
}