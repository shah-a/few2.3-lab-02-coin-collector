import './App.css';
import coinData from '../coins.json';

import { useState } from 'react';
import pluralize from 'pluralize';

function App() {
  const [coins, setCoins] = useState(coinData);

  const total = coins.reduce((acc, coin) => {
    return acc + (coin.value * coin.quantity);
  }, 0);

  const labels = coins.map((coin, index) => {
    return (
      <span key={coin.name}>
        {pluralize(coin.name)}: {coins[index].quantity}
      </span>
    );
  });

  const buttons = coins.map((coin, index) => {
    return (
      <button
        key={coin.name}
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
      <p>{labels[0]} | {labels[1]} | {labels[2]} | {labels[3]}</p>
      {buttons}
    </div>
  );
}

export default App;
