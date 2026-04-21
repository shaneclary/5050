"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { yearlyTotals, usd } from "@/lib/data";

export function YearlyChart() {
  const data = yearlyTotals().map((d) => ({
    year: d.year,
    "Gross receipts": Math.round(d.gross),
    "To charity": Math.round(d.charity),
  }));

  return (
    <div className="w-full h-[380px] bg-white border border-ink/10 rounded-lg p-4">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E1D8" />
          <XAxis dataKey="year" tick={{ fill: "#1A1F1A", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#1A1F1A", fontSize: 12 }}
            tickFormatter={(v) => usd(v, { compact: true })}
          />
          <Tooltip
            formatter={(value: number) => usd(value)}
            contentStyle={{ background: "#F5F3EF", border: "1px solid rgba(26,31,26,0.15)", borderRadius: 8 }}
          />
          <Legend />
          <Bar dataKey="Gross receipts" fill="#C88B6C" radius={[4, 4, 0, 0]} />
          <Bar dataKey="To charity" fill="#6A8E76" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
