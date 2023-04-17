import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "A", value: 100 },
  { name: "B", value: 200 },
  { name: "C", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const renderLegend = () => {
  return (
    <ul>
      {data.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <span
            style={{
              backgroundColor: COLORS[index],
              width: "12px",
              height: "12px",
              display: "inline-block",
              marginRight: "5px",
            }}
          ></span>
          {entry.name}
        </li>
      ))}
    </ul>
  );
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend content={renderLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
