import React from 'react'
import { useState } from 'react';
const ROI = () => {
 const [roiForm, setroiForm] = useState({
          netProfit: "",
         costOfInvestment: "",
       });
     
       const [roiResult, setroiResult] = useState(null);
 
       const roiHandleChange = (e) => {
         setroiForm({ ...roiForm, [e.target.name]: e.target.value });
         console.log(roiForm);
       };
     
       const roiHandleCalculate = () => {
           const NP = parseFloat(roiForm.netProfit);
           const COI = parseFloat(roiForm.costOfInvestment);
     
         if (!isNaN(NP) && !isNaN(COI)) {
           const ROI = (NP / COI) * 100;
           setroiResult(`${ROI.toLocaleString("en-IN")}%`);
         } else {
           setroiResult("please enter valid number!");
         }
       };
     
       const roiHandleClear = () => {
         setroiForm({
            netProfit: "",
            costOfInvestment: "",
         });
         setroiResult(null);
       };
   return (
     <div>
        <div className="Calculator">
             <h1>Return on Investment</h1>
             <input
               type="number"
               placeholder="      Net Profit"
               name="netProfit"
               value={roiForm.netProfit}
               onChange={roiHandleChange}
             />
             <br />
             <input
               type="number"
               placeholder="     Cost of Investment"
               name="costOfInvestment"
               value={roiForm.costOfInvestment}
               onChange={roiHandleChange}
             />
 
             <br />
             <button className="btn" onClick={roiHandleCalculate}>
               Calculate
             </button>
 
             <button className="btn" onClick={roiHandleClear}>
               Clear
             </button>
 
             <h3 className="res">
             Return on Investment: {roiResult != null ? roiResult : ""}
             </h3>
           </div>
     </div>
   )
 
}

export default ROI
