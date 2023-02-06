import { useState } from 'react'

function App() {
  const [passengers, setPassengers] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date);


  function performSearch() {
    console.log(passengers)
    console.log(origin)
    console.log(destination)
    console.log(departureDate)
  }

  return (
    <div className="App">
      <h1>Flight Status</h1>
      <div className="grid grid-cols-3">
        
        <div>
          <label>From</label>
          <input
            className="border-solid border-2 border-indigo-500 rounded" 
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)} 
          />
        </div>
        <div>
          <label>To</label>
          <input
            className="border-solid border-2 border-indigo-500 rounded" 
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)} 
          />
        </div>
        <div>
          <label>Passengers</label>
          <input
            className="border-solid border-2 border-indigo-500 rounded" 
            type="number" 
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}/>
        </div>
      </div>
      <label>Departure Date</label>
      <input
        className="border-solid border-2 border-indigo-500 rounded" 
        type="date" 
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}/>
      <button onClick={() => performSearch()}>Search</button>
    </div>
  )
}

export default App
