export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">React Learning Journey</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Describing the UI</h2>
        <ul className="list-disc ml-6">
          <li><a href="/describing-ui/conditional-rendering" className="text-blue-500 hover:underline">Conditional Rendering</a></li>
          <li><a href="/describing-ui/rendering-lists" className="text-blue-500 hover:underline">Rendering Lists</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Adding Interactivity</h2>
        <ul className="list-disc ml-6">
          <li><a href="/adding-interactivity/events" className="text-blue-500 hover:underline">Responding to Events</a></li>
          <li><a href="/adding-interactivity/state" className="text-blue-500 hover:underline">State</a></li>
        </ul>
      </section>
    </div>
  )
}
