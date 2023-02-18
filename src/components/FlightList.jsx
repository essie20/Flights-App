import React from 'react';

export default function FlightList({ data }) {
  return (
    <div>
      {
        data.map((bucket, i) => {
          return (<div key={i} className="border border-blue-500 p-1">
            {bucket.name}

            {bucket.items.map((item, j) => {
              return (<div key={j} className="border border-black">
                Price: {item.price.formatted}
                <a 
                  className="bg-blue-500 rounded p-1" 
                  href={item.deeplink} 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Find flight on SkyScanner
                </a>
              </div>
              );
                
            })}

            
          </div>)
        })
      }   
     
    </div>
  );
}