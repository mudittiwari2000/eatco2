import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    name: 20,
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: 40,
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 60,
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 80,
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: 100,
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: 120,
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: 140,
    uv: 349,
    pv: 430,
    amt: 210,
  },
  {
    name: 160,
    uv: 349,
    pv: 430,
    amt: 210,
  },
]

const DashboardChart = () => {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 40,
          left: 20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            opacity={0.5}
          >
            <stop offset="0" stopColor="#94C7FA" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#94C7FA" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} opacity={0.2} />
        <XAxis
          dataKey="name"
          tickFormatter={(val) => `CO2 ${val}kg`}
          tickSize={12}
          tickMargin={2}
        />
        <YAxis tickLine={false} tickFormatter={(val) => `${val}DKK`} />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#94C7FA"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#94C7FA"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default DashboardChart
