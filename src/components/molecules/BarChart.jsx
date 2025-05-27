"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import BigHeading from "../atoms/BigHeading";
import SmallText from "../atoms/SmallText";

const data = [
  { name: "Margherita", sales: 400 },
  { name: "Pepperoni", sales: 300 },
  { name: "MBBQ", sales: 500 },
  { name: "Hawaiian", sales: 100 },
];

export default function BarGraph() {
  return (
    <div className="border rounded-2xl p-6 border-[var(--color-tertiary)] size-fit">
      <SmallText>Orders By Categories</SmallText>
      <BigHeading>1000 Orders</BigHeading>
      <BarChart
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
        <Bar dataKey="sales" fill="#9C914A" />
      </BarChart>
    </div>
  );
}
