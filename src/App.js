import './App.css';
import Charts from './components/Charts';
import { useState, useEffect } from "react"
import Donought from './components/Donought';
function App() {
  const [chartData, setChartData] = useState({});
  const [haveData, setHaveData] = useState(false);
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      setHaveData(true);
      console.log(data)
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ],
        // options: {
        //   maintainAspectRatio: 5
        // }
      });
    }
    fetchPrices()
  }, [])
  if (!haveData) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div className="App">
        <Charts chartData={chartData} />
        <Donought chartData={chartData} />
      </div>
    );
  }

}

export default App;
