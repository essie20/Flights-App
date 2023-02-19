import React from 'react';

export default function FlightList({ data }) {
  return (
    <div className="p-1">
      {
        data.map((bucket, i) => {
          return (<div key={i} className="border border-blue-500 p-2 w-6/12">
            <div className="font-semibold text-sky-700 text-xl">{bucket.name}</div>

            {bucket.items.map((item, j) => {
              return (<div key={j} className="border-2 border-b-0 border-gray-400 p-4">
                <div className="row-2">
                    <div className="grid grid-cols-6">
                      <label className="font-bold text-xl text-center pt-3">
                        <span>{item.legs[0].departure.substr(11, 5) + " "}</span>
                        <span className="font-normal">{item.legs[0].origin.city}</span>
                      </label>
 
                      <div className="text-gray-600 text-sm text-center pt-3">
                        duration: {Math.floor(item.legs[0].durationInMinutes /60) + "h " + (((item.legs[0].durationInMinutes /60) - (Math.floor(item.legs[0].durationInMinutes /60)))*60).toFixed(0)}
                        <div>
                          stop: {item.legs[0].stopCount}
                        </div>
                      </div>
                      <label className="font-bold text-xl text-center pt-3">
                        <span>{item.legs[0].arrival.substr(11, 5) + " "}</span>
                        <span className="font-normal">{item.legs[0].destination.city}</span>
                      </label>
                      <div className="text-center text-sm text-gray-500">
                        {item.legs[0].carriers.marketing[0].name}
                        <div className="flex justify-center">
                          <img src={item.legs[0].carriers.marketing[0].logoUrl} className="w-6"/>
                        </div>
                      </div>
                      <div className="font-semibold text-sky-500 text-xl pl-14 col-end-6 pt-3">
                        {item.price.formatted}
                      </div>
                      <a 
                        className="bg-blue-500 rounded p-1 font-semibold text-gray-200 pl-5" 
                        href={item.deeplink} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Find fights on SkyScanner
                      </a>
                    </div>
                </div>
                
              </div>
              );
                
            })}

            
          </div>)
        })
      }   
     
    </div>
  );
}