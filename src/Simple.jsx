import './cal.css';
import { useState } from 'react';
import { evaluate } from 'mathjs'; // safer than eval

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const append = (value) => {
    setInput((prev) => prev + value);
  };

  const eq = () => {
    try {
      const res = evaluate(input);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };

  const clearEntry = () => setInput('');
  const clearAll = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => setInput((prev) => prev.slice(0, -1));

  return (
    <div className="calculator-container">
      <h1>Scientific Calculator</h1>
      <input type="text" value={input} readOnly placeholder="0" />
      <div>{result !== '' && <h2>Result: {result}</h2>}</div>

      <div className="input-btns">
        {/* Top Function Buttons */}
        <button onClick={() => append('(')}>(</button>
        <button onClick={() => append(')')}>)</button>
        <button onClick={() => append('^')}>^</button>
        <button onClick={() => append('sqrt(')}>√</button>

        {/* Trigonometry */}
        <button onClick={() => append('sin(')}>sin</button>
        <button onClick={() => append('cos(')}>cos</button>
        <button onClick={() => append('tan(')}>tan</button>
        <button onClick={() => append('log(')}>log</button>

        {/* Digits and Ops */}
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*'].map((val) => (
          <button key={val} onClick={() => append(val.toString())}>{val}</button>
        ))}
        <button onClick={() => append('0')}>0</button>
        <button onClick={() => append('.')}>.</button>
        <button onClick={() => append('/')}>÷</button>
        <button onClick={eq}>=</button>

        {/* Utility */}
        <button onClick={clearEntry}>CE</button>
        <button onClick={clearAll}>AC</button>
        <button onClick={backspace}>←</button>
      </div>
    </div>
  );
};

export default Calculator;
