import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";

import * as d3 from 'd3';

function ScatterGraph({data}){

    const w = 400
    const h = 300

    const [plotData, setPlotData] =  useState(data);
    const svgRef = useRef();

    useEffect(() => {
        const w = 400
        const h = 300
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('margin-top', '100px')

        const xScale = d3.scaleLinear()
            .domain([0, 50])
            .range([0, w])

        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([h, 0])

        const xAxis = d3.axisBottom(xScale).ticks(plotData.length)
        const yAxis = d3.axisLeft(yScale).ticks(10)

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`);
        svg.append('g')
            .call(yAxis);

        svg.append('text')
            .attr('x', w/2)
            .attr('y', h + 50)
            .text('x')
        svg.append('text')
            .attr('y', h/2)
            .attr('x', -50)
            .text('y')

        svg.selectAll()
            .data(plotData)
            .enter()
            .append('circle')
                .attr('cx', d => xScale(d.totalXGD))
                .attr('cy', d => yScale(d.points))
                .attr('r', 2)
                .style("fill", d => `${teamColours[d.clubname]}`)
                

    }, [plotData])

    return(
        <div>
            <svg ref={svgRef}>
                
            </svg>
        </div>
    )
}

export default ScatterGraph;