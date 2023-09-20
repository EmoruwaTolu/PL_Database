import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Scatterplot(props) {
  const svgRef = useRef(null);

  console.log(typeof props.data)
  const dataArray = Object.values(props.data[0]);
  const filteredData = dataArray.filter(d => d.position !== "GK");
  console.log(filteredData)
  var maxObject = null;

  (typeof filteredData !== 'undefined' && filteredData.length === 0) ? (console.log(maxObject))
  :(
      maxObject = filteredData.reduce((prev, current) => {
        return (prev._365stats.nonPenXG90 > current._365stats.nonPenXG90) ? prev : current
      })
  

  )

  console.log(maxObject)

  const margin = { top: 100, right: 20, bottom: 30, left: 40 };
  const width = 960 - margin.left - margin.right;
  const height = 650
  
  console.log(width)
  console.log(height)

  useEffect(() => {

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    //use the bottom two if you want the edges to be the maximum values in the data set
    // x.domain([d3.extent(filteredData, d => d._365stats.nonPenXG90)]);
    // y.domain(d3.extent(filteredData, d => d._365stats.xAG));

    x.domain([0,1])
    y.domain([0,1])

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    svg.selectAll('.dot')
      .data(filteredData)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('r', 3.5)
      .attr('cx', d => x(d._365stats.nonPenXG90))
      .attr('cy', d => y(d._365stats.xAG))
      .style('fill', 'blue')
      
      ;
  }, [filteredData]);

  return (
    <svg ref={svgRef}></svg>
  );
}

export default Scatterplot;
