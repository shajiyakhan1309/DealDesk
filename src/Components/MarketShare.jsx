import React from 'react'
import { useState } from 'react'
// Market Share (%) = (Company Sales / Total Market Sales) x 100 
const MarketShare = () => {
  const [marketForm, setmarketForm] = useState({
         companySales: "",
         totalMarketSales: "",
       });
     
       const [marketResult, setmarketResult] = useState(null);
 
       const marketHandleChange = (e) => {
         setmarketForm({ ...marketForm, [e.target.name]: e.target.value });
         console.log(marketForm);
       };
     
       const marketHandleCalculate = () => {
         const CS = parseFloat(marketForm.companySales);
         const TMS = parseFloat(marketForm.totalMarketSales);
     
         if (!isNaN(CS) && !isNaN(TMS)) {
           const Equity = (CS / TMS) * 100;
           setmarketResult(`${Equity.toLocaleString("en-IN")}%`);
         } else {
           setmarketResult("please enter valid number!");
         }
       };
     
       const marketHandleClear = () => {
         setmarketForm({
           companySales: "",
           totalMarketSales: "",
         });
         setmarketResult(null);
       };
   return (
     <div>
        <div className="Calculator">
             <h1>Market Share</h1>
             <input
               type="number"
               placeholder="      Company Sales"
               name="companySales"
               value={marketForm.companySales}
               onChange={marketHandleChange}
             />
             <br />
             <input
               type="number"
               placeholder="     Total Market Sales"
               name="totalMarketSales"
               value={marketForm.totalMarketSales}
               onChange={marketHandleChange}
             />
 
             <br />
             <button className="btn" onClick={marketHandleCalculate}>
               Calculate
             </button>
 
             <button className="btn" onClick={marketHandleClear}>
               Clear
             </button>
 
             <h3 className="res">
               Market Shares : {marketResult != null ? marketResult : ""}
             </h3>
           </div>
     </div>
   )
}

export default MarketShare
