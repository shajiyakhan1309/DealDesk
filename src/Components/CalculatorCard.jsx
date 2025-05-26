// CalculatorCard.js
import React from 'react';

const CalculatorCard = ({ 
  title, 
  inputs, 
  result, 
  onCalculate, 
  onClear 
}) => (
  <div className="Calculator">
    <h1>{title}</h1>
    {inputs.map((input) => (
      <React.Fragment key={input.name}>
        <input
          type="number"
          placeholder={input.placeholder}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
        />
        <br />
      </React.Fragment>
    ))}
    <button className="btn" onClick={onCalculate}>
      Calculate
    </button>
    <button className="btn" onClick={onClear}>
      Clear
    </button>
    <h3 className="res">
      {title}: {result ?? ''}
    </h3>
  </div>
);

export default CalculatorCard;