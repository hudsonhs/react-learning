'use client'
// Basic event handling:

function BasicButton() {
    function handleClick() {
        alert("Thing done!");
    }

    return (
        <button onClick={handleClick}>
            Do thing
        </button>
    )

    return (
        <button onClick={function handleClick() {
            alert("Thing done defining it in the onClick!")
        }}>
            Do thing
        </button>
    )

    // This would call alert upon render, not what we want
    return (
        <button onClick={alert("Thing done in anonymous function")}>
            Do thing!
        </button>
    )

    // But this does not since it passes in a fn definition instead of a call:
    return (
        <button onClick={() => {alert("Thing done in anonymous function")}}>
            Do thing!
        </button>
    )
}

// Reading a prop in an event handler:

function AlertButton({ message, children }) {
    return (
        <button onClick={() => {alert(message)}}>
            {children}
        </button>
    )
    
}

function Toolbar1() {
    return (
        <div>
            <AlertButton message='Playing the movie!'>
                Play Movie
            </AlertButton>

            <AlertButton message='File uploiading'>
                Upload File
            </AlertButton>
        </div>
    )
}

// Passing event handlers as props:

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`)
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    )
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    )
}

function Toolbar2() {
    return (
        <div>
            <PlayButton movieName="8 1/2" />
            <UploadButton />
        </div>
    )
}

// Alternatively, onSmash like this:

// function Button({ onSmash, children }) {
//     return (
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }


// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`)
//     }

//     return (
//         <Button onSmash={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     )
// }

// Naming event handler props for app-specific concepts like this:

function App() {
    return (
        <Toolbar3 onPlayMovie={() => alert("Playing!")} onUploadImage={() => alert("Uploading!")}
        />

    )
}

function Toolbar3({ onPlayMovie, onUploadImage }) {
    return(
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button> 
            <Button onClick={onUploadImage}>
                Upload Image
            </Button> 
        </div>
    )
}

// Events propagate up the tree.
function Toolbar4() {
    return (
        <div onClick={() => alert('You clicked the toolbar!')}>
            <button onClick={() => {alert('Playing!')}}>
                Play Movie
            </button>
            <button onClick={() => {alert('Uploading!')}}>
                Upload Image
            </button>
        </div>
    )
}

// Notice how 'Playing' shows up first before 'You clicked the toolbar!'

// Preventing propagation using the event object's stopPropagation fn

function Toolbar5() {
    return (
        <div onClick={() => alert('You clicked the toolbar!')}>
            <NonPropButton onClick={() => {alert('Playing!')}}>
                Play Movie
            </NonPropButton>
            <NonPropButton onClick={() => {alert('Uploading!')}}>
                Upload Image
            </NonPropButton>
        </div>
    )
}

function NonPropButton({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

// To force propagation, add "Capture" at the end of an event name:
function Toolbar6() {
    return (
        <div onClickCapture={() => alert('You clicked the toolbar!')}>
            <NonPropButton onClick={() => {alert('Playing!')}}>
                Play Movie
            </NonPropButton>
            <NonPropButton onClick={() => {alert('Uploading!')}}>
                Upload Image
            </NonPropButton>
        </div>
    )
}

// It actually propagates down rather than up, so "you clicked the toolbar" gets shown first

// You can also prevent default behavior of tags, like when a form is submitted, the page is refreshed automatically. Here's the code to prevent that:
// It's e.preventDefault. Which is diff from stopPropagation which stops the parent event handlers from being called.
export default function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}