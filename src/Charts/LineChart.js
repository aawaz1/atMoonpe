import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 300; // Decreased width
    const height = 300; // Keep the height the same or adjust as needed
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    svg.attr('width', width).attr('height', height);

    const x = d3
      .scalePoint()
      .domain(data.map(d => d.month))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.loyal, d.new, d.unique))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = g =>
      g.attr('transform', `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));

    const yAxis = g =>
      g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

    const line = d3
      .line()
      .curve(d3.curveCatmullRom)
      .x(d => x(d.month))
      .y(d => y(d.value));

    const colors = {
      loyal: 'purple',
      new: 'red',
      unique: 'green',
    };

    const categories = ['loyal', 'new', 'unique'];

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    categories.forEach(category => {
      svg
        .append('path')
        .datum(data.map(d => ({ month: d.month, value: d[category] })))
        .attr('fill', 'none')
        .attr('stroke', colors[category])
        .attr('stroke-width', 3)
        .attr('d', line);
    });

  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default LineChart;


