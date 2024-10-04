import React, { useState } from "react";
import Header from './components/Header';
import InputGroup from './components/InputGroup';
import ResultTable from './components/ResultTable';
import { calculateInvestmentResults } from './util/investment';


function App() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  });
  const [investmentResults, setInvestmentResults] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateInvestmentResults({
      initialInvestment: +formData.initialInvestment,
      annualInvestment: +formData.annualInvestment,
      expectedReturn: +formData.expectedReturn,
      duration: +formData.duration,
    });
    setInvestmentResults(results);
  };
  return (
    <>
      <Header title="Investment Calculator" />

      <div id="user-input">
        <form onSubmit={handleSubmit}>
          <InputGroup
            inputs={[
              { label: 'INITIAL INVESTMENT', id: 'initialInvestment', placeholder: 'Enter amount' },
              { label: 'ANNUAL INVESTMENT', id: 'annualInvestment', placeholder: 'Enter amount' }
            ]}
            onInputChange={handleInputChange}
          />
          <InputGroup
            inputs={[
              { label: 'EXPECTED RETURN', id: 'expectedReturn', placeholder: 'Enter percentage' },
              { label: 'DURATION', id: 'duration', placeholder: 'Enter years' }
            ]}
            onInputChange={handleInputChange}
          />
          <div className="center">
            <button type="submit">Calcular</button>
          </div>
        </form>
      </div>

      {investmentResults.length > 0 && <ResultTable data={investmentResults} />}

    </>
  );
}

export default App;
