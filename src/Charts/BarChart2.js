// // src/components/BarChart.js
// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const BarChart2 = () => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const data = [
//       { month: 'Jan', reality: 8823, target: 12122 },
//       { month: 'Feb', reality: 10000, target: 12000 },
//       { month: 'Mar', reality: 9000, target: 11000 },
//       { month: 'Apr', reality: 10500, target: 11500 },
//       { month: 'May', reality: 12000, target: 13000 },
//       { month: 'Jun', reality: 15000, target: 14000 },
//       { month: 'Jul', reality: 13000, target: 13500 },
//     ];

//     const margin = { top: 50, right: 30, bottom: 50, left: 60 };
//     const width = 300 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     const x0 = d3.scaleBand()
//       .domain(data.map(d => d.month))
//       .rangeRound([0, width])
//       .paddingInner(0.1);

//     const x1 = d3.scaleBand()
//       .domain(['reality', 'target'])
//       .rangeRound([0, x0.bandwidth()])
//       .padding(0.05);

//     const y = d3.scaleLinear()
//       .domain([0, d3.max(data, d => Math.max(d.reality, d.target))])
//       .nice()
//       .rangeRound([height, 0]);

//     const color = d3.scaleOrdinal()
//       .domain(['reality', 'target'])
//       .range(['#4BC0C0', '#FFCD56']);

//     svg.append('g')
//       .selectAll('g')
//       .data(data)
//       .enter()
//       .append('g')
//       .attr('transform', d => `translate(${x0(d.month)},0)`)
//       .selectAll('rect')
//       .data(d => ['reality', 'target'].map(key => ({ key, value: d[key] })))
//       .enter()
//       .append('rect')
//       .attr('x', d => x1(d.key))
//       .attr('y', d => y(d.value))
//       .attr('width', x1.bandwidth())
//       .attr('height', d => height - y(d.value))
//       .attr('fill', d => color(d.key));

//     svg.append('g')
//       .attr('class', 'axis')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(x0));

//     svg.append('g')
//       .attr('class', 'axis')
//       .call(d3.axisLeft(y).ticks(5, '$~s'));

   

   

//     const legend = svg.append('g')
//       .attr('transform', `translate(0,${height + 30})`);

//     legend.selectAll('rect')
      
//       .enter()
//       .append('rect')
//       .attr('x', (d, i) => i * 150)
//       .attr('y', 0)
//       .attr('width', 18)
//       .attr('height', 18)
//       .attr('fill', d => d.color);

//     legend.selectAll('text')
      
//       .enter()
//       .append('text')
//       .attr('x', (d, i) => i * 150 + 24)
//       .attr('y', 9)
//       .attr('dy', '0.35em')
//       .text(d => `${d.name} (${d.value.toLocaleString()})`);
//   }, []);

//   return <svg ref={svgRef}></svg>;
// };

// export default BarChart2;
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart2 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { month: 'Jan', reality: 8823, target: 12122 },
      { month: 'Feb', reality: 10000, target: 12000 },
      { month: 'Mar', reality: 9000, target: 11000 },
      { month: 'Apr', reality: 10500, target: 11500 },
      { month: 'May', reality: 12000, target: 13000 },
      { month: 'Jun', reality: 15000, target: 14000 },
      { month: 'Jul', reality: 13000, target: 13500 },
    ];

    const margin = { top: 50, right: 30, bottom: 50, left: 60 };
    const width = 300 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom; // Decreased height

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand()
      .domain(data.map(d => d.month))
      .rangeRound([0, width])
      .paddingInner(0.1);

    const x1 = d3.scaleBand()
      .domain(['reality', 'target'])
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.reality, d.target))])
      .nice()
      .rangeRound([height, 0]);

    const color = d3.scaleOrdinal()
      .domain(['reality', 'target'])
      .range(['#4BC0C0', '#FFCD56']);

    svg.append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${x0(d.month)},0)`)
      .selectAll('rect')
      .data(d => ['reality', 'target'].map(key => ({ key, value: d[key] })))
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
      .call(d3.axisLeft(y).ticks(5, '$~s'));

    const legend = svg.append('g')
      .attr('transform', `translate(0,${height + 30})`);

    // legend.selectAll('rect')
    //   .data([
    //     { name: 'Reality Sales', color: '#4BC0C0', value: 8823 },
    //     { name: 'Target Sales', color: '#FFCD56', value: 12122 },
    //   ])
    //   .enter()
    //   .append('rect')
    //   .attr('x', (d, i) => i * 150)
    //   .attr('y', 0)
    //   .attr('width', 18)
    //   .attr('height', 18)
    //   .attr('fill', d => d.color);

    legend.selectAll('text')
      .data([
        // { name: 'Reality Sales', color: '#4BC0C0', value: 8823 },
        // { name: 'Target Sales', color: '#FFCD56', value: 12122 },
      ])
      .enter()
      .append('text')
      .attr('x', (d, i) => i * 150 + 24)
      .attr('y', 9)
      .attr('dy', '0.35em')
      .text(d => `${d.name} (${d.value.toLocaleString()})`);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default BarChart2;
