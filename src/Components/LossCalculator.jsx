import React,{useState} from 'react'

const LossCalculator = () => {
    const [lossForm, setlossForm] = useState({
        totalExpenses: "",
        totalRevenue: "",
      });
    
      const [lossResult, setlossResult] = useState(null);

      const lossHandleChange = (e) => {
        setlossForm({ ...lossForm, [e.target.name]: e.target.value });
      };
    
      const lossHandleCalculate = () => {
        const totalExpenses = parseFloat(lossForm.totalExpenses);
        const totalRevenue = parseFloat(lossForm.totalRevenue);
    
        if (!isNaN(totalExpenses) && !isNaN(totalRevenue)) {
          const loss = totalExpenses - totalRevenue;
          setlossResult(`₹${loss.toLocaleString("en-IN")}`);
        } else {
          setlossResult("please enter valid number!");
        }
      };
    
      const lossHandleClear = () => {
        setlossForm({ totalExpenses: "", totalRevenue: "" });
        setlossResult(null);
      };
    

  return (
    <div>
       <div className="Calculator">
            <h1>Loss</h1>
            <input
              type="number"
              placeholder="Total Expenses"
              name="totalExpenses"
              value={lossForm.totalExpenses}
              onChange={lossHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="Total Revenue"
              name="totalRevenue"
              value={lossForm.totalRevenue}
              onChange={lossHandleChange}
            />

            <br />
            <button className="btn" onClick={lossHandleCalculate}>
              Calculate
            </button>

            <button className="btn" onClick={lossHandleClear}>
              Clear
            </button>

            <h3 className="res">
              Loss : {lossResult != null ? lossResult : ""}
            </h3>
          </div>
    </div>
  )
}

export default LossCalculator
