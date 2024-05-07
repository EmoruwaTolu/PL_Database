import { useMemo } from "react";
// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, innerHeight, tickOffset }) =>
  xScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      className="tick"
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} stroke="#f1f2f3" />
      <text
        style={{ textAnchor: "middle", fill: 'white' }}
        dy=".71em"
        y={innerHeight + tickOffset}
      >
        {tickValue}
      </text>
    </g>
  ));

// export const AxisBottom = ({ xScale, pixelsPerTick }) => {
//   const range = xScale.range();

//   const ticks = useMemo(() => {
//     const width = range[1] - range[0];
//     const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

//     return xScale.ticks(numberOfTicksTarget).map((value) => ({
//       value,
//       xOffset: xScale(value),
//     }));
//   }, [xScale]);

//   return (
//     <>
//       {/* Main horizontal line */}
//       <path
//         d={["M", range[0], 0, "L", range[1], 0].join(" ")}
//         fill="none"
//         stroke="white"
//       />

//       {/* Ticks and labels */}
//       {ticks.map(({ value, xOffset }) => (
//         <g key={value} transform={`translate(${xOffset}, 0) scale(1, 1)`}>
//           <line y2={TICK_LENGTH} stroke="white" />
//           <text
//             key={value}
//             style={{
//               fontSize: "10px",
//               textAnchor: "middle",
//               transform: "translateY(20px)",
//             }}
//           >
//             {value}
//           </text>
//         </g>
//       ))}
//     </>
//   );
// };