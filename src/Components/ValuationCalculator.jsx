import React, { useState } from "react";

const ValuationCalculator = () => {
  const [form, setForm] = useState({ SP: "", TOS: "" });
  const [result, setresult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    const Share = parseFloat(form.SP);
    const Outstanding = parseFloat(form.TOS);

    if (!isNaN(Share) && !isNaN(Outstanding)) {
      const marketCap = Share * Outstanding;
      setresult(`₹${marketCap.toLocaleString("en-IN")}`);
    } else {
      setresult("please enter valid number!");
    }
  };

  const handleClear = () => {
    setForm({ SP: "", TOS: "" });
    setresult(null);
  };

  return (
    <div>
      <div className="Calculator">
        <h1>Valuation</h1>
        <input
          type="number"
          placeholder="Share price"
          name="SP"
          value={form.SP}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Total Outstanding Shares"
          name="TOS"
          value={form.TOS}
          onChange={handleChange}
        />

        <br />
        <button className="btn" onClick={handleCalculate}>
          Calculate
        </button>

        <button className="btn" onClick={handleClear}>
          Clear
        </button>

        <h3 className="res">Valuation : {result != null ? result : ""}</h3>
      </div>
    </div>
  );
};

export default ValuationCalculator;
