import React,{useState} from 'react'

const EquityCalculator = () => {
    const [equityForm, setequityForm] = useState({
        TotalAssets: "",
        TotalLiabilities: "",
      });
    
      const [equityResult, setequityResult] = useState(null);

      const equityHandleChange = (e) => {
        setequityForm({ ...equityForm, [e.target.name]: e.target.value });
        console.log(equityForm);
      };
    
      const equityHandleCalculate = () => {
        const TA = parseFloat(equityForm.TotalAssets);
        const TL = parseFloat(equityForm.TotalLiabilities);
    
        if (!isNaN(TA) && !isNaN(TL)) {
          const Equity = TA - TL;
          setequityResult(`₹${Equity.toLocaleString("en-IN")}`);
        } else {
          setequityResult("please enter valid number!");
        }
      };
    
      const equityHandleClear = () => {
        setequityForm({
          TotalAssets: "",
          TotalLiabilities: "",
        });
        setequityResult(null);
      };
  return (
    <div>
       <div className="Calculator">
            <h1>Equity</h1>
            <input
              type="number"
              placeholder="      Total Assets"
              name="TotalAssets"
              value={equityForm.TotalAssets}
              onChange={equityHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="     Total Liabilities"
              name="TotalLiabilities"
              value={equityForm.TotalLiabilities}
              onChange={equityHandleChange}
            />

            <br />
            <button className="btn" onClick={equityHandleCalculate}>
              Calculate
            </button>

            <button className="btn" onClick={equityHandleClear}>
              Clear
            </button>

            <h3 className="res">
              Equity : {equityResult != null ? equityResult : ""}
            </h3>
          </div>
    </div>
  )
}

export default EquityCalculator
