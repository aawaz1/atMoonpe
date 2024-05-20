import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { day: 'Monday', online: 14000, offline: 12000 },
      { day: 'Tuesday', online: 15000, offline: 12000 },
      { day: 'Wednesday', online: 3000, offline: 20000 },
      { day: 'Thursday', online: 17000, offline: 10000 },
      { day: 'Friday', online: 8000, offline: 5000 },
      { day: 'Saturday', online: 12000, offline: 15000 },
      { day: 'Sunday', online: 20000, offline: 15000 }
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom; // Decreased height

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand()
      .domain(data.map(d => d.day))
      .rangeRound([0, width])
      .paddingInner(0.3);

    const x1 = d3.scaleBand()
      .domain(['online', 'offline'])
      .rangeRound([0, x0.bandwidth()])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.online, d.offline))])
      .nice()
      .rangeRound([height, 0]); // Adjusted range

    const color = d3.scaleOrdinal()
      .domain(['online', 'offline'])
      .range(['#36A2EB', '#4BC0C0']);

    svg.append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${x0(d.day)},0)`)
      .selectAll('rect')
      .data(d => ['online', 'offline'].map(key => ({ key, value: d[key] })))
      .enter()
      .append('rect')
      .attr('x', d => x1(d.key))
      .attr('y', d => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('fill', d => color(d.key));

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x0));

    svg.append('g')
      .attr('class', 'axis')
      .call(d3.axisLeft(y).ticks(5, '$~s')); // Adjusted number of ticks

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;


