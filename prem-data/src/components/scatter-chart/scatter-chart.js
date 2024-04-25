import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";

import * as d3 from 'd3';

function ScatterGraph({data}){

    const w = 400
    const h = 300
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };


    const [plotData, setPlotData] =  useState(data);
    const svgRef = useRef();

    useEffect(() => {
        const margin = { top: 20, right: 20, bottom: 50, left: 50 }; // Add margins

        const svg = d3.select(svgRef.current)
            .attr('width', w + margin.left + margin.right)
            .attr('height', h + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const xExtent = d3.extent(data, d => d.totalXGD);
        const minCX = Math.min(0, xExtent[0]); // Get the minimum cx value
        const xScale = d3.scaleLinear()
            .domain([minCX, xExtent[1]]) // Adjust the domain to start from the minimum cx value
            .range([0, w - margin.right - margin.left]); // Adjust range to fit within the margins
    
        const yExtent = d3.extent(data, d => d.points);
        const yScale = d3.scaleLinear()
            .domain([0, yExtent[1]])
            .range([h, 0]);
    
        const xAxis = d3.axisBottom(xScale).ticks(data.length);
        const yAxis = d3.axisLeft(yScale).ticks(10);

        svg.append('g')
            .attr('transform', `translate(0, ${h})`)
            .call(xAxis);

        svg.append('g')
            .call(yAxis);

        svg.append('text')
            .attr('x', w / 2)
            .attr('y', h + margin.bottom / 2) // Adjust for margin
            .text('x');

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left) // Adjust for margin
            .attr('x', -h / 2)
            .attr('dy', '1em')
            .text('y');

        svg.selectAll()
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d.totalXGD)) 
            .attr('cy', d => yScale(d.points))
            .attr('r', 4)
            .style("fill", d => `${teamColours[d.clubname]}`);

                

    }, [plotData])

    return(
        <div>
            <svg ref={svgRef}>
                
            </svg>
        </div>
    )
}

export default ScatterGraph;