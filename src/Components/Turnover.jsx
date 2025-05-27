import React from 'react'
import { useState } from 'react';
// Turnover = Total Sales - (Allowances + Returns + Discounts)
const Turnover = () => {
    const [turnoverForm, setturnoverForm] = useState({
        totalSales: "",
        Allowances: "",
        Returns: "",
        Discounts: "",
      });
    
      const [turnoverresult, setturnoverresult] = useState(null);

      const turnoverHandleChange = (e) => {
        setturnoverForm({ ...turnoverForm, [e.target.name]: e.target.value });
      };
    
      const calculateTurnover = () => {
        const { totalSales, Allowances, Returns, Discounts,  } =
          turnoverForm;
        const TS = parseFloat(totalSales);
        const allowance = parseFloat(Allowances);
        const rtn = parseFloat(Returns);
        const disc = parseFloat(Discounts);

        if (
          !isNaN(TS) &&
          !isNaN(allowance) &&
          !isNaN(rtn) &&
          !isNaN(disc)
        ) {
          const turnover = TS - (allowance + rtn + disc);
          setturnoverresult(`₹${turnover.toLocaleString("en-IN")}`);
        } else {
          setturnoverresult(" Please enter a valid number!");
        }
      };
    
      const turnoverHandleClear = () => {
        setturnoverForm({
          totalSales: "",
          Allowances: "",
          Returns: "",
          Discounts: "",
        });
        setturnoverresult(null);
      };
    
  return (
    <div>
      <div className="Calculator">
            <h1>Turnover</h1>
            <input
              type="number"
              placeholder="Total Sales"
              name="totalSales"
              value={turnoverForm.totalSales}
              onChange={turnoverHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="Allowances"
              name="Allowances"
              value={turnoverForm.Allowances}
              onChange={turnoverHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="Returns"
              name="Returns"
              value={turnoverForm.Returns}
              onChange={turnoverHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="Discounts"
              name="Discounts"
              value={turnoverForm.Discounts}
              onChange={turnoverHandleChange}
            />
            <br />
            
            <button className="btn" onClick={calculateTurnover}>
              Calculate
            </button>

            <button className="btn" onClick={turnoverHandleClear}>
              Clear
            </button>

            <h3 className="res">
              Turnover :{turnoverresult != null ? turnoverresult : ""}
            </h3>
          </div>
    </div>
  )
}

export default Turnover