import React from 'react';
import { Bar } from 'react-chartjs-2';
//import logo from './logo.svg';
import './App.css';

function App() {
	const graphData = {
		labels: [
      ['2019', '1月'],
      ['2019', '2月'],
      ['2019', '3月'],
      ['2019', '4月'],
      ['2019', '5月'],
      ['2019', '6月'],
      ['2019', '7月'],
      ['2019', '8月'],
      ['2019', '9月'],
      ['2019', '10月'],
      ['2019', '11月'],
      ['2019', '12月'],
		],
    datasets: [
      {
        data: [16,42,117,90,120,225,235,112,116,457,43,23],
        label: '月別降水量(mm)',
      },
    ]
  };
  return (
    <div className="App">
      <Bar data={graphData} />
    </div>
  );
}

export default App;
