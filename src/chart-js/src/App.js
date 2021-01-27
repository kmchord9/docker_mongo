import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
//import logo from './logo.svg';
import './App.css';

function App() {
    function onRefresh(chart) {
      chart.config.data.datasets.forEach(function(dataset) {
       dataset.data.push({
        x: Date.now(),
        y: Math.random()
       });
      });
    };
    
    const graphData = {
      datasets: [
        {
          data: [],
        },
        {
          data: [],
        }
      ]
    };

    const optionData = {
      scales: {
       xAxes: [{
        type: 'realtime',
        realtime: {
          onRefresh: onRefresh,
          delay: 2000
        },
       }]
      }
    };

    return (
      <div className="App">
        <Line data={graphData} options={optionData}/>
      </div>
    );
}
export default App;
