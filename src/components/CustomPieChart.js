

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#326e0a", "#930909"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + (radius - 9) * Math.cos(-midAngle * RADIAN); // Adjusted x coordinate
  const y = cy + (radius - 9) * Math.sin(-midAngle * RADIAN); // Adjusted y coordinate

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={16}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120} // Increase the outerRadius to increase the size of the chart
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
