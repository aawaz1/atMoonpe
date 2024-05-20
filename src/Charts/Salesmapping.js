// src/SalesMapping.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import worldData from './world-110m.json'; // You need to have this file

const SalesMapping = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 800)
      .attr('height', 500)
      .style('background', '#ffffff')
      .style('margin-top', '50')
      .style('overflow', 'visible');

    const projection = d3.geoMercator().scale(100).translate([400, 250]);
    const path = d3.geoPath().projection(projection);

    const countries = topojson.feature(worldData, worldData.objects.countries).features;

    svg.selectAll('.country')
      .data(countries)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', path)
      .attr('fill', '#d0d0d0')
      .attr('stroke', '#ffffff');

    const salesData = {
      USA: '#ffcc00',
      BRA: '#ff5733',
      CHN: '#6f42c1',
      IDN: '#28a745',
      COD: '#007bff'
    };

    svg.selectAll('.country')
      .attr('fill', d => {
        const country = d.properties.iso_a3;
        return salesData[country] || '#d0d0d0';
      });

  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Sales Mapping by Country</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SalesMapping;
