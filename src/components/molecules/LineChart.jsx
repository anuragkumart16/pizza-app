"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import BigHeading from "../atoms/BigHeading";
import SmallText from "../atoms/SmallText";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "APR", value: 100 },
  { name: "MAY", value: 800 },
  { name: "JUN", value: 900 },
];

export default function LineGraph() {
  return (
    <div className="border-1 rounded-2xl p-6 border-[var(--color-tertiary)] size-fit">
        <SmallText>Total sales</SmallText>
        <BigHeading>$200,000</BigHeading>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 40, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#9C914A" />
      </LineChart>
    </div>
  );
}
