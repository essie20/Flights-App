import { useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { getDepartures } from './api/flight';
import { format, addDays } from 'date-fns'
import Input from './components/Input';

function App() {
  const queryClient = useQueryClient()
  const [passengers, setPassengers] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const minmumDate = format(addDays(new Date(), 8), 'yyyy-MM-dd')
  const [departureDate, setDepartureDate] = useState(minmumDate);

  const { loading, error, data } = useQuery("getDepartures", getDepartures);


  function performSearch() {
    const formattedDepartureDate = format(new Date(departureDate), 'yyyy-MM-dd')
    getDepartures(origin, destination, formattedDepartureDate, passengers)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <div>
        {data}
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-5">Flight Status</h1>
      <div className="flex flex-row gap-4 mb-4 bg-blue-900 p-5 rounded-2xl">
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/4">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">From</span>
            <Input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="text"
              initialValue={origin}
              onChange={setOrigin}
            />
          </label>
        </div>
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/4">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">To</span>
            <Input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="text"
              initialValue={destination}
              onChange={setDestination}
            />
          </label>
        </div>
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/4">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">Departure Date</span>
            <Input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="date"
              initialValue={departureDate}
              onChange={setDepartureDate} 
              min={minmumDate} //if type is date how to send min props??
            />
          </label>
        </div>
        <div className="border-solid border border-blue-300 rounded bg-white basis-1/6">
          <label>
            <span className="mr-2 block pt-3 pl-5 text-gray-500">Passengers</span>
            <Input
              className="w-full outline-0 px-5 pb-2 text-xl"
              type="number"
              initialValue={passengers} 
              onChange={setPassengers}
            />
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
