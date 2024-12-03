'use client'
import { useState } from 'react';
import { useImmer } from 'use-immer';


function WrongMovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        // This doesn't work because it assigns positions to the previous render. Need to use setState and
        // Treat the objects like you're makign new ones
        position.x = e.clientX;
        position.y = e.clientY;
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}

function MovingDot() {
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    return (
      <div
        onPointerMove={e => {
            // Replace position with a new object and render it again
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
            // Also this works:
            // const nextPosition = {}
            // nextPosition.x = e.clientX;
            // nextPosition.y = e.clientY;
            // setPosition(nextPosition);
            // In fact, I kinda like this a little more for learning since it's made clear this is a position
            // And a new
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    );
  }

function Form() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
        // As opposed to this which doesn't work:
        // person.firstName = e.target.value

        // This basically copies person with ...person and then changes the firstName field that was set with the spread syntax
        // Without that we'd do:
        // setPerson({
        //   firstName: e.target.value, // New first name from the input
        //   lastName: person.lastName,
        //   email: person.email
        // });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    return (
        <>
        <label>
            First name:
            <input
            value={person.firstName}
            onChange={handleFirstNameChange}
            />
        </label>
        <label>
            Last name:
            <input
            value={person.lastName}
            onChange={handleLastNameChange}
            />
        </label>
        <label>
            Email:
            <input
            value={person.email}
            onChange={handleEmailChange}
            />
        </label>
        <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
        </p>
        </>
    );
}

function Form2() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    // Here's how you update a nested object:
    // Make a copy of the parent object, then make a copy of the child,
    // Then do the spread notation on the child object
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

// Also if we need to deep clone, just use useImmer instead:
export default function Form3() {
    const [person, updatePerson] = useImmer({
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    });
  
    function handleNameChange(e) {
        updatePerson(p => {
            p.name = e.target.value;
        });
    }
  
    function handleTitleChange(e) {
        // Updating a nested obejct in immer:
        updatePerson(p => {
            p.artwork.title = e.target.value;
        });
    }
  
    function handleCityChange(e) {
        updatePerson(p => {
            p.artwork.city = e.target.value;
        })
    }
  
    function handleImageChange(e) {
        updatePerson(p => {
            p.artwork.image = e.target.value;
        })
    }
  
    return (
      <>
        <label>
          Name:
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
        <p>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img 
          src={person.artwork.image} 
          alt={person.artwork.title}
        />
      </>
    );
  }