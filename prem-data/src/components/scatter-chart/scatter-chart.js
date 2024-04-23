import { useState, useRef, useEffect } from "react";
import * as d3 from 'd3';

function ScatterGraph({data}){

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
            .domain([0, 100])
            .range([0, w])

        const yScale = d3.scaleLinear()
            .domain([0, 200])
            .range([h, 0])

        const xAxis = d3.axisBottom(xScale).ticks(plotData.length)
        const yAxis = d3.axisLeft(yScale).ticks(10)

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`);
        
        svg.append('g')
            .call(yAxis)

    }, [plotData])

    console.log(plotData)

    return(
        <div>
            {/* <svg ref={svgRef}/> */}
        </div>
    )
}

export default ScatterGraph;