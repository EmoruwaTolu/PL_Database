import { useState, useRef, useEffect } from "react";
import { teamColours } from "../player-tab";
import './chart.css'
import * as d3 from 'd3';

export function getWindowDimensions() {
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
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        d3.select("#graph-homepage").selectAll("*").remove();

        if(windowDimensions.width <= 1024){
            w = windowDimensions.width * 0.9; 
            h = windowDimensions.height * 0.5; 
            if(windowDimensions.width <= 700){
                fontSize = '0.7rem';
            }
            else{
                fontSize = '1rem';
            }
            
        }
        else if (windowDimensions.width <= 1440 ** windowDimensions.width > 1024){
            w = windowDimensions.width * 0.35;
            h = windowDimensions.height * 0.4; 
        }
        else{
            w = windowDimensions.width * 0.38; 
            h = Math.min(windowDimensions.height * 0.5, 820);
        }

        const svg = d3.select("#graph-homepage")
            .attr('width', w + margin.left + margin.right)
            .attr('height', h + margin.top + margin.bottom)
            .append("svg");

        const gMain = svg
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

        gMain.append('g')
            .attr('transform', `translate(0, ${h})`)
            .call(xAxis)
            .style('stroke', 'rgb(192, 192, 192)');

        gMain.append('g')
            .call(yAxis)
            .style('stroke', 'rgb(192, 192, 192)');

        gMain.append('text')
            .attr('x', (w - margin.right - margin.left)/2 - 80)
            .attr('y', h + margin.bottom - 5) // Adjust for margin
            .text('Expected Goal Difference')
            .style('fill', 'rgb(192, 192, 192)')
            .style('font-size', `${fontSize}`);

        gMain.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left) // Adjust for margin
            .attr('x', -h / 2)
            .attr('dy', '1em')
            .text('Points')
            .style('fill', 'rgb(192, 192, 192)')
            .style('font-size', `${fontSize}`);

        // const tooltip = d3.select("#graph-homepage").append("div")
        //     .attr("class", "tooltip")
        //     .style("visibility", "hidden");

        var tooltip = d3.select("#graph-homepage")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        gMain.selectAll()
            .data(data)
            .enter()
            .append('circle')
            .attr("id", d => `circle-${d.clubname}`)
            .attr('cx', d => xScale(d.totalXGD)) 
            .attr('cy', d => yScale(d.points))
            .attr('r', 4)
            .style("fill", d => `${teamColours[d.clubname]}`)
            .on("mouseover", function (event, d) {
                console.log(d)
                tooltip.transition()
                    .duration(200)
                    .style("visibility", "visible")
                    .style("opacity", 1);
                tooltip.html(`Club: ${d.clubname}<br/>Points: ${d.points}<br/>xGD (Expected Goal Difference): ${d.totalXGD}`)
                    .style('z-index', 99)
                    .style("visibility", "visible")
            })
            .on("mousemove", function(event, d){
                console.log(d3.pointer(event))
                tooltip
                    .style("left", (d3.pointer(event)[0]) + "px")
                    .style("top", (d3.pointer(event)[1]) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("visibility", "hidden");
            });

    }, [plotData, windowDimensions, data])

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div id="graph-homepage">
        </div>
    )
}

export default ScatterGraph;