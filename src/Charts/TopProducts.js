// src/TopProducts.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TopProducts = () => {
  const data = [
    { name: 'Home Decor ', popularity: 45, color: '#007bff' },
    { name: 'Disney Bag', popularity: 29, color: '#28a745' },
    { name: ' Essentials', popularity: 18, color: '#6f42c1' },
    { name: ' Smartwatches', popularity: 25, color: '#fd7e14' }
  ];

  const svgRefs = useRef([]);

  useEffect(() => {
    data.forEach((d, i) => {
      const svg = d3.select(svgRefs.current[i])
        .attr('width', 150)
        .attr('height', 20);

      svg.selectAll('*').remove();

      svg.append('rect')
        .attr('width', d.popularity * 1.5)
        .attr('height', 10)
        .attr('fill', d.color);

      svg.append('text')
        .attr('x', d.popularity * 1.5 + 5)
        .attr('y', 10)
        .attr('dy', '-0.3em')
        // .text(`${d.popularity}%`)
        .attr('fill', '#000');
    });
  }, [data]);

  return (
    <div className="w-full max-w-3xl overflow-x-scroll md:overflow-hidden mx-auto bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Top Products</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">#</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Popularity</th>
            <th className="py-2 px-4 text-left">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-2 text-sm">{product.name}</td>
              <td className="py-2 px-4">
                <svg ref={el => svgRefs.current[index] = el}></svg>
              </td>
              <td className="py-2 px-4">{product.popularity}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;

