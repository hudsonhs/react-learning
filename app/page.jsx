export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">React Learning Journey</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Describing the UI</h2>
        <ul className="list-disc ml-6">
          <li><a href="/describing-ui/conditional-rendering" className="text-blue-500 hover:underline">Conditional Rendering</a></li>
          <li><a href="/describing-ui/rendering-lists" className="text-blue-500 hover:underline">Rendering Lists</a></li>
          <li><a href="/describing-ui/keeping-components-pure" className="text-blue-500 hover:underline">Keeping Components Pure</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Adding Interactivity</h2>
        <ul className="list-disc ml-6">
          <li><a href="/adding-interactivity/responding-to-events" className="text-blue-500 hover:underline">Responding to Events</a></li>
          <li><a href="/adding-interactivity/state" className="text-blue-500 hover:underline">State</a></li>
          <li><a href="/adding-interactivity/state-as-snapshot" className="text-blue-500 hover:underline">State as snapshot</a></li>
          <li><a href="/adding-interactivity/queueing-a-series-of-state-updates" className="text-blue-500 hover:underline">Queueing a series of state updates</a></li>
          <li><a href="/adding-interactivity/updating-objects-in-state" className="text-blue-500 hover:underline">Updating objects in state</a></li>
        </ul>
      </section>
    </div>
  )
}
