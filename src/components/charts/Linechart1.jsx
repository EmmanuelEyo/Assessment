import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';

const Linechart1 = () => {
    const data = [
        { month: 'January', income: 150 },
        { month: 'February', income: 160 },
        { month: 'March', income: 200 },
        { month: 'April', income: 180 },
        { month: 'May', income: 220 },
        { month: 'June', income: 190 },
        { month: 'July', income: 210 },
      ];
  return (
    <LineChart width={350} height={200} className='ml-[-180px] mt-28' data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              tickFormatter={(value) => `$${value}k`}
              domain={[0, 'dataMax']}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="rgba(156, 163, 175)"
              fill="rgba(156, 163, 175, 0.1)"
              strokeWidth={2}
              dot={{ fill: 'rgba(156, 163, 175)' }}
            />
    </LineChart>
  )
}

export default Linechart1