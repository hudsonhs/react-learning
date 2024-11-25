export default function Page(){
    return (
        <>
            <BadComponent />
            <BadComponent />
            <BadComponent />
            <GoodComponent guest={10}/>
            <GoodComponent guest={5}/>
        </>
    )

}
//THE COMPONENT BELOW IS NOT A PURE FUNCTION BECAUSE IT ALTERS STATE THAT EXISTED OUTSIDE THE FUNCTION
let guest = 0

export function BadComponent() {
    guest = guest + 1
    return <h2>Tea cups for {guest} guests</h2>
}

// Pass guests as a prop instead

export function GoodComponent({guest}) {
    return <h2>Tea cups for {guest} guests</h2>
}

// Can't change state on the DOM
export function BadClock({ time }) {
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
      document.getElementById('time').className = 'night';
    } else {
      document.getElementById('time').className = 'day';
    }
    return (
      <h1 id="time">
        {time.toLocaleTimeString()}
      </h1>
    );
}

export function GoodClock({ time }) {
    let hours = time.getHours();
    let className = hours >= 0 && hours <= 6 ? 'night' : 'day';
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
}

// Can't change props
export function BadStoryTray({ stories }) {
    stories.push({
      id: 'create',
      label: 'Create Story'
    });
  
    return (
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
}

export function GoodStoryTray({ stories }) {
    stories.push({
      id: 'create',
      label: 'Create Story'
    });
  
    return (
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
}