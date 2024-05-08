import React from "react";
import { useState, useEffect, useCallback } from "react";
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Tooltip } from './tooltip';
import './tooltip.css'
import { getWindowDimensions } from "./scatter-chart";
import * as d3 from 'd3';

export default function CreatePageScatter({data, xAxisName, yAxisName}){

    const [newdata, setData] = useState(data);

    const [hoveredValue, setHoveredValue] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = useCallback(
        (event) => {
        const { clientX, clientY } = event;
        if(Math.abs(clientX - mousePosition.x > 4) || Math.abs(clientY - mousePosition.y)> 4){
            setHoveredValue(null)
        }
        setMousePosition({ x: clientX, y: clientY });
        
        },
        [setMousePosition]
    );

    const hideTooltip = useCallback(() => {
        setHoveredValue(null);
    }, []);

    const calculateSvgDimensions = () => {
        let svgWidth, svgHeight;

        svgWidth = windowDimensions.width * 0.8;
        svgHeight = windowDimensions.height * 0.5;
        if (windowDimensions.height <= 1024) {
            svgHeight = windowDimensions.height * 0.8;
        } else if (windowDimensions.height <= 1440) {
            svgHeight = windowDimensions.height * 0.75;
        } else {
            svgHeight = windowDimensions.height * 0.7;
        }
        return { width: svgWidth, height: svgHeight };
    };

    const { width: svgWidth, height: svgHeight } = calculateSvgDimensions();
    const margin = { top: 50, right: 20, bottom: 30, left: 110 };
    const innerHeight = svgHeight - margin.top - margin.bottom;
    const innerWidth = svgWidth - margin.right - margin.left;

    const xExtent = d3.extent(data, d => d.stat1);
    const minCX = Math.min(0, xExtent[0]); // Get the minimum cx value
    const xScale = d3.scaleLinear()
        .domain([minCX, xExtent[1]]) // Adjust the domain to start from the minimum cx value
        .range([0, innerWidth]); // Adjust range to fit within the margins
    
    const yExtent = d3.extent(data, d => d.stat2);
    const yScale = d3.scaleLinear()
        .domain([yExtent[0], yExtent[1]])
        .range([innerHeight, 0]);

    const Marks = ({
            data,
            xScale,
            yScale,
            setHoveredValue,
            handleMouseMove,
            hideTooltip
        }) =>
            data.map((d, i) => (
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
                  onMouseLeave={() => {setHoveredValue(null); hideTooltip();}}
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
            <svg id="svg" width={svgWidth} height={svgHeight}>
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
                    hideTooltip={hideTooltip}
                    />
                </g>
            </svg>
        </div>
    )
    
}
