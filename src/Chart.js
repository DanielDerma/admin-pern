import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { students } from "./data";

const data = [
  {
    uv: 12,
  },
];

export default function App() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.uv > 60 ? "#94BFE5" : "#C983BB"}
              ></Cell>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
