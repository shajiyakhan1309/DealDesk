import React from 'react';
import ValuationCalculator from './ValuationCalculator';
import EbitdaCalculator from './EbitdaCalculator';
import EquityCalculator from './EquityCalculator';
import RevenueCalculator from './RevenueCalculator';
import ProfitCalculator from './ProfitCalculator';
import LossCalculator from './LossCalculator';
import ROI from './ROI';
import Turnover from './turnover';
import MarketShare from './MarketShare';

const Calculation = () => {
  return (
    <div className="container">
      <div className="calculator-grid">
        <div className="calculator"><ValuationCalculator /></div>
        <div className="calculator"><EbitdaCalculator /></div>
        <div className="calculator"><EquityCalculator /></div>
        <div className="calculator"><RevenueCalculator /></div>
        <div className="calculator"><ProfitCalculator /></div>
        <div className="calculator"><LossCalculator /></div>
        <div className="calculator"><Turnover /></div>
        <div className="calculator"><ROI /></div>
        <div className="calculator"><MarketShare /></div>
      </div>
    </div>
  );
};

export default Calculation;
