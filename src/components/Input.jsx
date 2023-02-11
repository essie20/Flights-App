import React, { useState } from 'react';

export default function Input({ type, initialValue, onChange, min }) {
  const [value, setValue] = useState(initialValue || '');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  
  return (
    <div>
      { type === 'date' ? (
        <input type={type} value={value} onChange={handleChange} min={min} />
      ) : (
        <input type={type} value={value} onChange={handleChange} />
      )}
    </div>
  );
}