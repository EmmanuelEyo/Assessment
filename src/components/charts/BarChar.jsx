import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const BarChar = () => {
    const data = [
        { name: 'January', '2021': -10, '2022': 5 },
        { name: 'February', '2021': 5, '2022': 10 },
        { name: 'March', '2021': 15, '2022': 20 },
        { name: 'April', '2021': 20, '2022': 30 },
        { name: 'May', '2021': 10, '2022': 15 },
        { name: 'June', '2021': 5, '2022': 10 },
        { name: 'July', '2021': -5, '2022': 0 }
    ];
  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="2021" fill="#8884d8" />
      <Bar dataKey="2022" fill="#82ca9d" />
  </BarChart>
  )
}

export default BarChar