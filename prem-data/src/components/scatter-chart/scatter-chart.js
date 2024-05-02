import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import './chart.css'
import * as d3 from 'd3';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

function ScatterGraph({data}){

    const [plotData, setPlotData] =  useState(data);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const svgRef = useRef();

    useEffect(() => {
        var w ;
        var h ;
        var fontSize = '16px';
        const margin = { top: 20, right: 20, bottom: 50, left: 50 }; // Add margins
        d3.select(svgRef.current).selectAll("*").remove();

        if(windowDimensions.width <= 1024){
            w = windowDimensions.width * 0.9; // 80% of window width
            h = windowDimensions.height * 0.5; // 60% of window height
            if(windowDimensions.width <= 700){
                fontSize = '0.7rem';
            }
            else{
                fontSize = '1rem';
            }
            
        }
        else if (windowDimensions.width <= 1440 ** windowDimensions.width > 1024){
            w = windowDimensions.width * 0.35; // 80% of window width
            h = windowDimensions.height * 0.4; // 60% of window height
        }
        else{
            w = windowDimensions.width * 0.38; // 80% of window width
            h = Math.min(windowDimensions.height * 0.5, 820); // 60% of window height
        }

        console.log(w)

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
            .attr('x', (w - margin.right - margin.left)/2 - 80)
            .attr('y', h + margin.bottom - 5) // Adjust for margin
            .text('Expected Goal Difference')
            .style('fill', 'rgb(192, 192, 192)')
            .style('font-size', `${fontSize}`);

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left) // Adjust for margin
            .attr('x', -h / 2)
            .attr('dy', '1em')
            .text('Points')
            .style('fill', 'rgb(192, 192, 192)')
            .style('font-size', `${fontSize}`);

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

    }, [plotData, windowDimensions, data])

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log(windowDimensions);

    return(
        <div>
            <svg ref={svgRef}>    
            </svg>
        </div>
    )
}

export default ScatterGraph;