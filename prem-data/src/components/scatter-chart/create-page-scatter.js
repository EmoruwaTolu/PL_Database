import React from "react";
import { useState, useEffect, useCallback } from "react";
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Tooltip } from './tooltip';
import './tooltip.css'
import * as d3 from 'd3';

const width = 960;
const height = 500;
const margin = { top: 50, right: 20, bottom: 30, left: 110 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;

export default function CreatePageScatter({data, xAxisName, yAxisName}){

    const [newdata, setData] = useState(data);

    const [hoveredValue, setHoveredValue] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
        },
        [setMousePosition]
    );

    const xExtent = d3.extent(data, d => d.stat1);
    const minCX = Math.min(0, xExtent[0]); // Get the minimum cx value
    const xScale = d3.scaleLinear()
        .domain([minCX, xExtent[1]]) // Adjust the domain to start from the minimum cx value
        .range([0, width - margin.right - margin.left]); // Adjust range to fit within the margins
    
    const yExtent = d3.extent(data, d => d.stat2);
    const yScale = d3.scaleLinear()
        .domain([yExtent[0], yExtent[1]])
        .range([height - margin.top - margin.bottom, 0]);

    const Marks = ({
            data,
            xScale,
            yScale,
            setHoveredValue,
            handleMouseMove,
        }) =>
            data.map((d, i) => (
                // console.log(d.stat1)
              <>
                <circle
                  key={`${d.playerName}`}
                  data-xvalue={d.stat1}
                  data-yvalue={d.stat2}
                  className="dot"
                  cx={xScale(d.stat1)}
                  cy={yScale(d.stat2)}
                  r={4}
                  fill={"#C4B0D5"}
                  onMouseEnter={() => setHoveredValue(d)}
                  onMouseLeave={() => setHoveredValue(null)}
                  onMouseMove={handleMouseMove}
                />
              </>
        )
    );

    return(
        <div>
            <Tooltip
                hoveredValue={hoveredValue}
                mousePosition={mousePosition}
                labelX={xAxisName}
                labelY={yAxisName}
            />
            <svg id="svg" width={width} height={height}>
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    <g id="y-axis" className="y-axis">
                    <AxisLeft
                        yScale={yScale}
                        innerWidth={innerWidth}
                        tickOffset={20}
                    />
                    </g>
                    <g id="x-axis" className="x-axis">
                    <AxisBottom
                        xScale={xScale}
                        innerHeight={innerHeight}
                        tickOffset={8}
                    />
                    </g>
                    <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    setHoveredValue={setHoveredValue}
                    handleMouseMove={handleMouseMove}
                    />
                </g>
            </svg>
        </div>
    )
    
}
