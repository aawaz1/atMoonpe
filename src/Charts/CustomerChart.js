import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CustomerSatisfactionChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const dataLastMonth = [3, 4, 3, 5, 4, 5, 3, 4, 5, 3, 4, 5];
    const dataThisMonth = [4, 5, 4, 6, 5, 6, 4, 5, 6, 4, 5, 6];

    const width = 300;
    const height = 300; // Decreased height
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#ffffff')
      .style('overflow', 'visible');

    const xScale = d3.scaleLinear()
      .domain([0, dataLastMonth.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataThisMonth) + 1])
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale).ticks(dataLastMonth.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);

    const lineGenerator = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveCatmullRom);

    svg.append('path')
      .datum(dataLastMonth)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

    svg.append('path')
      .datum(dataThisMonth)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

    svg.selectAll('.dot-last')
      .data(dataLastMonth)
      .enter().append('circle')
      .attr('class', 'dot-last')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', d => yScale(d))
      .attr('r', 4)
      .attr('fill', 'blue');

    svg.selectAll('.dot-this')
      .data(dataThisMonth)
      .enter().append('circle')
      .attr('class', 'dot-this')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', d => yScale(d))
      .attr('r', 4)
      .attr('fill', 'green');

  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default CustomerSatisfactionChart;
