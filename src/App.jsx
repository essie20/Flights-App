import { useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getDepartures } from "./api/flight";
import { format, addDays } from "date-fns";
import Input from "./components/Input";
import FlightList from "./components/FlightList";

function App() {
  const queryClient = useQueryClient();
  const [passengers, setPassengers] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const minmumDate = format(addDays(new Date(), 8), "yyyy-MM-dd");
  const [departureDate, setDepartureDate] = useState(minmumDate);

  const { loading, error, data, refetch } = useQuery(
    ["getDepartures"],
    () => {
      const formattedDepartureDate = format(
        new Date(departureDate),
        "yyyy-MM-dd"
      );
      return getDepartures(
        origin,
        destination,
        formattedDepartureDate,
        passengers
      );
    },
    {
      enabled: false,
    }
  );

  return (
    <div className="App">
      <h1 className="mb-5 text-3xl font-bold">Flight Status</h1>
      <div className="mb-4 flex flex-row gap-4 rounded-2xl bg-blue-900 p-5">
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
          onChange={(value) => {
            value ? setPassengers(value) : setPassengers(1);
          }}
          min={1}
        />
        <button
          className="ml-2 mt-2 h-14 w-32 rounded-full border border-solid border-green-700 bg-green-500 px-4 py-2 font-semibold text-white"
          onClick={() => refetch()}
        >
          Search
        </button>
      </div>
      {data ? <FlightList data={data} /> : "no data"}
    </div>
  );
}

export default App;
