import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import './chart.css'
import * as d3 from 'd3';

function ScatterGraph({data}){

    const w = 500
    const h = 400

    const [plotData, setPlotData] =  useState(data);
    const svgRef = useRef();

    useEffect(() => {
        setPlotData(data); // Update plotData when data changes
    }, [data]);

    useEffect(() => {
        console.log(plotData)
        const margin = { top: 20, right: 20, bottom: 50, left: 50 }; // Add margins
        d3.select(svgRef.current).selectAll("*").remove();

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
    
        const yExtent = data;
        yExtent.sort((a,b) => b.points - a)
        const yScale = d3.scaleLinear()
            .domain([0, yExtent[0].points])
            .range([h, 0]);
    
        const xAxis = d3.axisBottom(xScale).ticks(data.length / 2);
        const yAxis = d3.axisLeft(yScale).ticks(10);

        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg.append('g')
            .attr('transform', `translate(0, ${h})`)
            .call(xAxis)
            .style('stroke', 'rgb(192, 192, 192)');

        svg.append('g')
            .call(yAxis)
            .style('stroke', 'rgb(192, 192, 192)');

        svg.append('text')
            .attr('x', w /4)
            .attr('y', h + margin.bottom ) // Adjust for margin
            .text('Expected Goal Difference')
            .style('fill', 'rgb(192, 192, 192)');

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left) // Adjust for margin
            .attr('x', -h / 2)
            .attr('dy', '1em')
            .text('Points')
            .style('fill', 'rgb(192, 192, 192)');

        svg.selectAll()
            .data(plotData)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d.totalXGD)) 
            .attr('cy', d => yScale(d.points))
            .attr('r', 4)
            .style("fill", d => `${teamColours[d.clubname]}`)
            .on("mouseover", function (event, d) {
                console.log('entered')
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(`${d.clubname}<br/>Points: ${d.points}<br/>XGD: ${d.totalXGD}`)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

    }, [plotData])

    console.log(data);

    return(
        <div>
            <svg ref={svgRef}>    
            </svg>
        </div>
    )
}

export default ScatterGraph;