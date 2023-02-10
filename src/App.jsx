import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { getDepartures } from './api/flight';
import { format, addDays } from 'date-fns'

function App() {
  const queryClient = useQueryClient()
  const [passengers, setPassengers] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const minmumDate = format(addDays(new Date(), 8), 'yyyy-MM-dd')
  const [departureDate, setDepartureDate] = useState(minmumDate);


  function performSearch() {
    const formattedDepartureDate = format(new Date(departureDate), 'yyyy-MM-dd')
    getDepartures(origin, destination, formattedDepartureDate, passengers)
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-5">Flight Status</h1>
      <div className="flex flex-row gap-4 mb-4 bg-blue-900 p-5 rounded-2xl">
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/4">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">From</span>
            <input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}/>
          </label>
        </div>
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/4">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">To</span>
            <input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}/>
          </label>
        </div>
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/4">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">Departure Date</span>
            <input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="date" 
              value={departureDate}
              min={minmumDate}
              onChange={(e) => setDepartureDate(e.target.value)}/>
          </label>
        </div>
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/6">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">Passengers</span>
            <input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="number" 
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}/>
          </label>
        </div>
        <button 
          className="border-solid border text-white border-green-700 bg-green-500 rounded-full px-4 py-2 ml-2 mt-2 font-semibold w-32 h-14" 
          onClick={() => performSearch()}>
          Search
        </button>
      </div>
    </div>
  )
}

export default App
