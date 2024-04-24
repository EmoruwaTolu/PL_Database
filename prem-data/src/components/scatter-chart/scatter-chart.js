import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";

import * as d3 from 'd3';

function ScatterGraph({data}){

    const w = 400
    const h = 300

    const [plotData, setPlotData] =  useState(data);
    const [interactionData, setInteractionData] = useState<interactionData | null>(null);
    const yScale = d3.scaleLinear().domain([0, 50]).range([w, 0]);
    const xScale = d3.scaleLinear().domain([0, 100]).range([h, 0]);

    const svgRef = useRef();

    var allShapes = plotData.map((d, i) => {
        console.log(d)
        return (
          <circle
            key={i}
            r={7} // radius
            cx={xScale(d.totalXGD)} // position on the X axis
            cy={yScale(d.points)} // on the Y axis
            opacity={1}
            stroke="#cb1dd1"
            fill={teamColours[d.clubname]}
            fillOpacity={0.2}
            strokeWidth={1}
            onMouseEnter={() => // Each time the circle is hovered hover...
                setInteractionData({ // ... update the interactionData state with the circle information
                xPos: xScale(d.totalXGD),
                yPos: yScale(d.points),
                name: d.clubname,
                })
            }
            onMouseLeave={() => setInteractionData(null)}
          />
        );
    });

    useEffect(() => {
        // const w = 400
        // const h = 300
        // const svg = d3.select(svgRef.current)
        //     .attr('width', w)
        //     .attr('height', h)
        //     .style('overflow', 'visible')
        //     .style('margin-top', '100px')

        // const xScale = d3.scaleLinear()
        //     .domain([0, 50])
        //     .range([0, w])

        // const yScale = d3.scaleLinear()
        //     .domain([0, 100])
        //     .range([h, 0])

        // const xAxis = d3.axisBottom(xScale).ticks(plotData.length)
        // const yAxis = d3.axisLeft(yScale).ticks(10)

        // svg.append('g')
        //     .call(xAxis)
        //     .attr('transform', `translate(0, ${h})`);
        // svg.append('g')
        //     .call(yAxis);

        // svg.append('text')
        //     .attr('x', w/2)
        //     .attr('y', h + 50)
        //     .text('x')
        // svg.append('text')
        //     .attr('y', h/2)
        //     .attr('x', -50)
        //     .text('y')

        // svg.selectAll()
        //     .data(plotData)
        //     .enter()
        //     .append('circle')
        //         .attr('cx', d => xScale(d.totalXGD))
        //         .attr('cy', d => yScale(d.points))
        //         .attr('r', 2)
        //         .style("fill", d => `${teamColours[d.clubname]}`)
                

    }, [plotData])

    return(
        <div>
            <svg ref={svgRef}>
            <g
                width={w}
                height={h}
                
                >
                {/* Y axis */}
                <AxisLeft yScale={yScale} pixelsPerTick={40} width={w} />

                {/* X axis, use an additional translation to appear at the bottom */}
                <g >
                    <AxisBottom
                    xScale={xScale}
                    pixelsPerTick={40}
                    height={h}
                    />
                </g>

                {/* Circles */}
                {allShapes}
            </g>
            </svg>
        </div>
    )
}

export default ScatterGraph;