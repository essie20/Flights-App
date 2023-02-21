import React from "react";

export default function FlightList({ data }) {
  return (
    <div className="pt-2">
      {data.map((bucket, i) => {
        return (
          <div
            key={i}
            className="border-grey-500 mb-3 rounded-2xl border bg-blue-200 p-1 pt-2"
          >
            <div className="p-2 text-xl font-semibold text-black">
              {bucket.name}
            </div>

            {bucket.items.map((item, j) => {
              return (
                <div
                  key={j}
                  className="m-1 rounded border-2 border-b-0 border-gray-200 bg-white p-4"
                >
                  <div className="grid grid-cols-6">
                    <label className="pt-3 text-center text-xl font-bold">
                      <span>{item.legs[0].departure.substr(11, 5) + " "}</span>
                      <span className="font-normal">
                        {item.legs[0].origin.city}
                      </span>
                    </label>

                    <div className="pt-3 text-center text-xs text-gray-600">
                      Duration:{" "}
                      {Math.floor(item.legs[0].durationInMinutes / 60) +
                        "h " +
                        (
                          (item.legs[0].durationInMinutes / 60 -
                            Math.floor(item.legs[0].durationInMinutes / 60)) *
                          60
                        ).toFixed(0)}
                      <div className={item.legs[0].stopCount && "text-red-500"}>
                        {item.legs[0].stopCount
                          ? "Stops: " + item.legs[0].stopCount
                          : "Direct"}
                      </div>
                    </div>
                    <label className="pt-3 text-center text-xl font-bold">
                      <span>{item.legs[0].arrival.substr(11, 5) + " "}</span>
                      <span className="font-normal">
                        {item.legs[0].destination.city}
                      </span>
                    </label>
                    <div className="pl-1 text-center text-sm text-gray-500">
                      <div className="mb-1 flex justify-center">
                        <img
                          src={item.legs[0].carriers.marketing[0].logoUrl}
                          className="w-6"
                        />
                      </div>
                      <div className="">
                        {item.legs[0].carriers.marketing[0].name}
                      </div>
                    </div>
                    <div className="col-end-6 pl-12 pt-3 text-xl font-bold text-sky-500">
                      {item.price.formatted}
                    </div>
                    <a
                      className="ml-auto w-24 rounded-full bg-blue-800 p-3 text-center font-semibold text-gray-200"
                      href={item.deeplink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
