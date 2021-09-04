import './App.css';
import coinData from '../coins.json';

import { useState } from 'react';

function App() {
  const [coins, setCoins] = useState(coinData);

  const total = coins.reduce((acc, coin) => {
    return acc + (coin.value * coin.quantity);
  }, 0);

  const buttons = coins.map((coin, index) => {
    return (
      <button
        onClick={() => {
          const newCoins = [...coins];
          newCoins[index].quantity += 1;
          setCoins(newCoins);
        }}
      >+${coin.value.toFixed(2)}</button>
    );
  });

  return (
    <div className="App">
      <h1>Coin Collector!</h1>
      <h2>Total: ${total.toFixed(2)}</h2>
      <p>Pennies: {coins[0].quantity} | Nickles: {coins[1].quantity} | Dimes: {coins[2].quantity} | Quarters: {coins[3].quantity}</p>
      {buttons}
    </div>
  );
}

export default App;
