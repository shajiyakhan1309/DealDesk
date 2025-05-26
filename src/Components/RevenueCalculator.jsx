import React,{useState} from 'react'

const RevenueCalculator = () => {
    const [revenueForm, setrevenueForm] = useState({
        Price: "",
        Quantity: "",
      });
    
      const [revenueResult, setrevenueResult] = useState(null);

      const revenueHandleChange = (e) => {
        setrevenueForm({ ...revenueForm, [e.target.name]: e.target.value });
      };
    
      const revenueHandleCalculate = () => {
        const Price = parseFloat(revenueForm.Price);
        const Quantity = parseFloat(revenueForm.Quantity);
    
        if (!isNaN(Price) && !isNaN(Quantity)) {
          const Revenue = Price * Quantity;
          setrevenueResult(`₹${Revenue.toLocaleString("en-IN")}`);
        } else {
          setrevenueResult("please enter valid number!");
        }
      };
    
      const revenueHandleClear = () => {
        setrevenueForm({ Price: "", Quantity: "" });
        setrevenueResult(null);
      };
  return (
    <div>
       <div className="Calculator">
            <h1>Revenue</h1>
            <input
              type="number"
              placeholder="      Price"
              name="Price"
              value={revenueForm.Price}
              onChange={revenueHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="     Quantity"
              name="Quantity"
              value={revenueForm.Quantity}
              onChange={revenueHandleChange}
            />

            <br />
            <button className="btn" onClick={revenueHandleCalculate}>
              Calculate
            </button>

            <button className="btn" onClick={revenueHandleClear}>
              Clear
            </button>

            <h3 className="res">
              Revenue : {revenueResult != null ? revenueResult : ""}
            </h3>
          </div>
        </div>
   
  )
}

export default RevenueCalculator
