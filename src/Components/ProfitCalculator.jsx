import React,{useState} from 'react'
import CalculatorCard from './CalculatorCard';

const ProfitCalculator = () => {
  const [form, setForm] = useState({ totalRevenue: '', totalExpenses: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const revenue = parseFloat(form.totalRevenue);
    const expenses = parseFloat(form.totalExpenses);
    
    if (!isNaN(revenue) && !isNaN(expenses)) {
      setResult(`₹${(revenue - expenses).toLocaleString('en-IN')}`);
    } else {
      setResult('Please enter valid numbers!');
    }
  };

  const clear = () => {
    setForm({ totalRevenue: '', totalExpenses: '' });
    setResult(null);
  };

  return (
    <CalculatorCard
      title="Profit"
      inputs={[
        {
          name: 'totalRevenue',
          placeholder: 'Total Revenue',
          value: form.totalRevenue,
          onChange: handleChange
        },
        {
          name: 'totalExpenses',
          placeholder: 'Total Expenses',
          value: form.totalExpenses,
          onChange: handleChange
        }
      ]}
      result={result}
      onCalculate={calculate}
      onClear={clear}
    />
  );
};

export default ProfitCalculator;