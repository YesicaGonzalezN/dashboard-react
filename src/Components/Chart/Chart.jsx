import React from "react";
import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Enero",
    Total: 43200,
  },
  {
    name: "Febrero",
    Total: 36500,
  },
  {
    name: "Marzo",
    Total: 45100,
  },
  {
    name: "Abril",
    Total: 51100,
  },
  {
    name: "Mayo",
    Total: 43700,
  },
  {
    name: "Junio",
    Total: 62300,
  },
];

const Chart = ({aspect}) => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={100}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#714bd9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#714bd9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#714bd9"
            fillOpacity={1}
            fill="url(#Total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
