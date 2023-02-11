import React from 'react';

export default function Input({ type, value, onChange, min, label, className }) {
  return (
    <div className={"border-solid border border-blue-300 rounded bg-white " + className}>
      <label>
        <span className="mr-2 block pt-3 pl-5 text-gray-500">{label}</span>
        <div>
          <input 
            className="w-full outline-0 px-5 pb-2 text-xl" 
            type={type} 
            value={value} 
            onChange={(event) => onChange(event.target.value)} 
            min={min ? min : null} />
        </div>
      </label>
    </div>
  );
}