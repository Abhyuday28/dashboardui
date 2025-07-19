// "use client"

// import { Bar, BarChart, XAxis, YAxis, ReferenceLine } from "recharts"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// export default function Component() {
//   const chartData = [
//     { day: "Mon", current: 7, previous: 5 },
//     { day: "Tue", current: 10, previous: 8 },
//     { day: "Wed", current: 8, previous: 6 },
//     { day: "Thu", current: 4, previous: 7 },
//     { day: "Fri", current: 9, previous: 8 },
//   ]

//   const chartConfig = {
//     current: {
//       label: "Current Week",
//       color: "#000000",
//     },
//     previous: {
//       label: "Previous Week",
//       color: "#000000",
//     },
//   }

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-gray-50">
//       <h2 className="text-sm font-medium text-gray-900 mb-4 ml-[17px]">New customers</h2>

//       {/* SVG definitions outside the chart */}
//       <svg width="0" height="0">
//         <defs>
//           <pattern id="diagonalTicks" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
//             <rect width="8" height="8" fill="white" />
//             <line x1="0" y1="0" x2="0" y2="8" stroke="#000000" strokeWidth="0.5" />
//             <line x1="4" y1="0" x2="4" y2="8" stroke="#000000" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//       </svg>

//       <ChartContainer config={chartConfig} className="h-48 w-full text-left px-0 mx-[-1px]">
//         <BarChart
//           data={chartData}
//           margin={{
//             top: 20,
//             right: 20,
//             left: -20,
//             bottom: 20,
//           }}
//         >
//           <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
//           <YAxis
//             domain={[0, 10]}
//             ticks={[0, 5, 10]}
//             axisLine={false}
//             tickLine={false}
//             tick={{ fontSize: 12, fill: "#666" }}
//           />
//           <ReferenceLine y={0} stroke="#d3d3d3" strokeWidth={0.5} />
//           <ChartTooltip content={<ChartTooltipContent />} cursor={false} />

//           {/* Pattern-filled bars (previous week) */}
//           <Bar dataKey="previous" fill="url(#diagonalTicks)" radius={[4, 4, 0, 0]} />

//           {/* Normal opacity bars (current week) */}
//           <Bar dataKey="current" fill="#000000" fillOpacity={1} radius={[4, 4, 0, 0]} />
//         </BarChart>
//       </ChartContainer>
//     </div>
//   )
// }


"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts"

export default function NewCustomersChart() {
  const chartData = [
    { day: "Mon", current: 7, previous: 3 },
    { day: "Tue", current: 10, previous: 5 },
    { day: "Wed", current: 8, previous: 4 },
    { day: "Thu", current: 4, previous: 2 },
    { day: "Fri", current: 10, previous: 7 },
  ]

  
  return (
    <div className="w-full h-35 mx-[-20px]">
      {/* Pattern definition for striped bars */}
      <svg width="0" height="0">
        <defs>
          <pattern
            id="diagonalTicks"
            patternUnits="userSpaceOnUse"
            width="4"
            height="4"
            patternTransform="rotate(45)"
          >
            <rect width="8" height="8" fill="transparent" />
            <line x1="0" y1="0" x2="0" y2="8" stroke="#000000" strokeWidth="0.5" />
            <line x1="4" y1="0" x2="4" y2="8" stroke="#000000" strokeWidth="0.5" />
          </pattern>
        </defs>
      </svg>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          barCategoryGap="10%"
          barGap={4}
          margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#000000" }}
          />
          <YAxis
            domain={[0, 10]}
            ticks={[0, 5, 10]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#000000" }}
          />
          <ReferenceLine y={0} stroke="#D3D3D3" strokeWidth={1} />

          <Bar
            dataKey="previous"
            fill="url(#diagonalTicks)"
            radius={[4, 4, 0, 0]}
          />
          <Bar dataKey="current" fill="#000000" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
