import { useState } from 'react'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import { getDepartures } from './api/flight';
import { format, addDays } from 'date-fns'
import Input from './components/Input';
import FlightList from './components/FlightList';

function App() {
  const queryClient = useQueryClient()
  const [passengers, setPassengers] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const minmumDate = format(addDays(new Date(), 8), 'yyyy-MM-dd')
  const [departureDate, setDepartureDate] = useState(minmumDate);

  const { loading, error, data, refetch } = useQuery(["getDepartures"], () => {
    const formattedDepartureDate = format(new Date(departureDate), 'yyyy-MM-dd')
    return getDepartures(origin, destination, formattedDepartureDate, passengers) 
  }, {
    enabled: false
  });

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-5">Flight Status</h1>
      <div className="flex flex-row gap-4 mb-4 bg-blue-900 p-5 rounded-2xl">
          <Input
            className="basis-1/4"
            label="From"
            type="text"
            value={origin}
            onChange={setOrigin}
          />
          <Input
            className="basis-1/4"
            label="To"
            type="text"
            value={destination}
            onChange={setDestination}
          />
          <Input
            className="basis-1/4"
            label="Departure Date"
            type="date"
            value={departureDate}
            onChange={setDepartureDate} 
            min={minmumDate}
          />
          <Input
            className="basis-1/6"
            label="Passengers"
            type="number"
            value={passengers} 
            onChange={setPassengers}
          />
        <button 
          className="border-solid border text-white border-green-700 bg-green-500 rounded-full px-4 py-2 ml-2 mt-2 font-semibold w-32 h-14" 
          onClick={() => refetch()}>
          Search
        </button>
      </div>
      {data ? <FlightList data={data} /> : "no data"}
    </div>
  )
}

export default App
