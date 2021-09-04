import './App.css';

import { useState } from 'react';

function App() {
  const [pennies, setPennies] = useState(0);
  const [nickles, setNickles] = useState(0);
  const [dimes, setDimes] = useState(0);
  const [quarters, setQuarters] = useState(0);

  const total =
    (pennies * 0.01) +
    (nickles * 0.05) +
    (dimes * 0.10) +
    (quarters * 0.25);

  return (
    <div className="App">
      <h1>Coin Collector!</h1>
      <h2>Total: ${total.toFixed(2)}</h2>
      <p>Pennies: {pennies} | Nickles: {nickles} | Dimes: {dimes} | Quarters: {quarters}</p>

      <button
        onClick={() => setPennies(pennies + 1)}
      >+$0.01</button>

      <button
        onClick={() => setNickles(nickles + 1)}
      >+$0.05</button>

      <button
        onClick={() => setDimes(dimes + 1)}
      >+$0.10</button>

      <button
        onClick={() => setQuarters(quarters + 1)}
      >+$0.25</button>
    </div>
  );
}

export default App;
