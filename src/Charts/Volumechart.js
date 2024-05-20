import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const VolumeServiceChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [
      { volume: 1135, services: 635 },
      { volume: 1400, services: 700 },
      { volume: 1200, services: 600 },
      { volume: 900, services: 450 },
      { volume: 1000, services: 500 },
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 20 },
      width = 400 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom,
      barWidth = 10;

    const svg = d3.select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.5);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.volume)])
      .nice()
      .range([height, 0]);

    svg.selectAll('.bar-volume')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-volume')
      .attr('x', (d, i) => x(i) + (x.bandwidth() - barWidth) / 2)
      .attr('y', d => y(d.volume))
      .attr('width', barWidth)
      .attr('height', d => height - y(d.volume))
      .attr('fill', '#3b82f6');

    svg.selectAll('.bar-service')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-service')
      .attr('x', (d, i) => x(i) + (x.bandwidth() - barWidth) / 2)
      .attr('y', d => y(d.services))
      .attr('width', barWidth)
      .attr('height', d => height - y(d.services))
      .attr('fill', '#10b981');

    // Remove axes
    svg.selectAll('.x-axis').remove();
    svg.selectAll('.y-axis').remove();
  }, []);

  return (
    <div className="flex flex-col items-center p-2">
      <h2 className="text-lg font-semibold">Volume vs Service Level</h2>
      <svg ref={chartRef}></svg>
      <div className="flex justify-center mt-2 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-blue-500 block"></span>
          <span>Volume</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-green-500 block"></span>
          <span>Services</span>
        </div>
      </div>
      <div className='flex justify-center gap-12 items-center'>
        <span className=' text-gray-800 font-semibold'>1135</span>
        <span className='ml-1 text-gray-800 font-semibold'>635</span>
      </div>
    </div>
  );
};

export default VolumeServiceChart;

