import coinData from '../data/coins.json';
import coinIcon from '../assets/coin.svg.jsx';

import { useState } from 'react';
import pluralize from 'pluralize';

function App() {
  const [coins, setCoins] = useState(coinData);

  const total = coins.reduce((acc, coin) => {
    return acc + (coin.value * coin.quantity);
  }, 0);

  const labels = coins.map((coin, index) => {
    return (
      <span
        key={coin.name}
        className="mr-5">
        {pluralize(coin.name)}: {coins[index].quantity}
      </span>
    );
  });

  const buttons = coins.map((coin, index) => {
    return (
      <button
        key={coin.name}
        className="bg-green-500 hover:bg-green-700 mt-3 mr-3 py-2 px-4 rounded"
        onClick={() => {
          const newCoins = [...coins];
          newCoins[index].quantity += 1;
          setCoins(newCoins);
        }}
      >+${coin.value.toFixed(2)}</button>
    );
  });

  return (
    <div className="App mt-10 ml-20">
      <h1 className="font-bold text-4xl pb-5">Coin Collector! {coinIcon}</h1>
      <h2 className="text-2xl pb-5">Total: ${total.toFixed(2)}</h2>
      <p>{labels}</p>
      {buttons}
    </div>
  );
}

export default App;
