import React,{useState} from 'react'

const EbitdaCalculator = () => {
    const [ebitdaForm, setebitdaForm] = useState({
        netIncome: "",
        interest: "",
        taxes: "",
        depreciation: "",
        amortization: "",
      });
    
      const [ebitdaResult, setebitdaResult] = useState(null);

      const ebitdaHandleChange = (e) => {
        setebitdaForm({ ...ebitdaForm, [e.target.name]: e.target.value });
      };
    
      const calculateEbitda = () => {
        const { netIncome, interest, taxes, depreciation, amortization } =
          ebitdaForm;
        const income = parseFloat(netIncome);
        const intr = parseFloat(interest);
        const tax = parseFloat(taxes);
        const depr = parseFloat(depreciation);
        const amr = parseFloat(amortization);
    
        if (
          !isNaN(income) &&
          !isNaN(intr) &&
          !isNaN(tax) &&
          !isNaN(depr) &&
          !isNaN(amr)
        ) {
          const ebitda = income + intr + tax + depr + amr;
          setebitdaResult(`₹${ebitda.toLocaleString("en-IN")}`);
        } else {
          setebitdaResult(" Please enter a valid number!");
        }
      };
    
      const ebitdaHandleClear = () => {
        setebitdaForm({
          netIncome: "",
          interest: "",
          taxes: "",
          depreciation: "",
          amortization: "",
        });
        setebitdaResult(null);
      };
    
  return (
    <div>
      <div className="Calculator">
            <h1>Ebitda</h1>
            <input
              type="number"
              placeholder="Net Income"
              name="netIncome"
              value={ebitdaForm.netIncome}
              onChange={ebitdaHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="Interest"
              name="interest"
              value={ebitdaForm.interest}
              onChange={ebitdaHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="taxes"
              name="taxes"
              value={ebitdaForm.taxes}
              onChange={ebitdaHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="depreciation"
              name="depreciation"
              value={ebitdaForm.depreciation}
              onChange={ebitdaHandleChange}
            />
            <br />
            <input
              type="number"
              placeholder="amortization"
              name="amortization"
              value={ebitdaForm.amortization}
              onChange={ebitdaHandleChange}
            />

            <br />
            <button className="btn" onClick={calculateEbitda}>
              Calculate
            </button>

            <button className="btn" onClick={ebitdaHandleClear}>
              Clear
            </button>

            <h3 className="res">
              Ebitda :{ebitdaResult != null ? ebitdaResult : ""}
            </h3>
          </div>
    </div>
  )
}

export default EbitdaCalculator
