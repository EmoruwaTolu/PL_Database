import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from './AxisLeft';
import * as d3 from 'd3';

function ScatterGraph({data}){

    const w = 500
    const h = 400

    const [plotData, setPlotData] =  useState(data);
    const svgRef = useRef();
    const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

    const boundsWidth = w - MARGIN.right - MARGIN.left;
    const boundsHeight = h - MARGIN.top - MARGIN.bottom;

    const testData = [
        {
          x: 2,
          y: 4
        },
        {
          x: 8,
          y: 5
        }
    ]

    const yScale = d3.scaleLinear()
        .domain([0, 10]) // data goes from 0 to 10
        .range([0, 10]);
    
    const xScale = d3.scaleLinear()
        .domain([0, 10]) // data goes from 0 to 10
        .range([0, 10]);

    const allShapes = testData.map((d, i) => {
        return (
            <circle
                key={i}
                r={13}
                cx={xScale(d.y)}
                cy={yScale(d.x)}
                opacity={1}
                stroke="#cb1dd1"
                fill="#cb1dd1"
                fillOpacity={0.2}
                strokeWidth={1}
            />
        );
    });

    useEffect(() => {
        setPlotData(data); // Update plotData when data changes
    }, [data]);

    useEffect(() => {
        console.log(plotData)
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

        svg.selectAll("*").remove();

        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg.append('g')
            .attr('transform', `translate(0, ${h})`)
            .call(xAxis);

        svg.append('g')
            .call(yAxis);

        svg.append('text')
            .attr('x', w / 2)
            .attr('y', h + margin.bottom / 2) // Adjust for margin
            .text('Expected Goal Difference');

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left) // Adjust for margin
            .attr('x', -h / 2)
            .attr('dy', '1em')
            .text('Points');

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
            <svg ref={svgRef} width={w} height={h}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
                >
                    <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />
                    <g transform={`translate(0, ${boundsHeight})`}>
                        <AxisBottom
                        xScale={xScale}
                        pixelsPerTick={40}
                        height={boundsHeight}
                        />
                    </g>
                {allShapes}
                </g>
            </svg>
        </div>
    )
}

export default ScatterGraph;