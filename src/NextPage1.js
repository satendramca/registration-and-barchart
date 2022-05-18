import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
// import React from 'react'

const NextPage = () => {

 const [data, setData] = useState([200, 150, 350, 100, 50, 125]);
 const svgRef = useRef(0);

 const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

 const updateData = () => {
  console.info('====updateData=====');
  console.info('====updateData=====', data);
  setData([]);
  console.info('====updateData=====', data);
 };

 useEffect(()=>{
    // setting up svg container

    const w = 400;
    const h = 300;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '75px');

  //  setting the scaling

   const xScale = d3.scaleBand()
    .domain(data.map((val, i) => i))
    .range([0, w])
    .padding(0.5);
   const yScale = d3.scaleLinear()
    .domain([0, h])
    .range([h, 0]); 

  // setting the axes
  const xAxis = d3.axisBottom(xScale)
    .ticks(data.lenght);
   const yAxis = d3.axisLeft(yScale)
     .ticks(5);
     svg.append('g') 
       .call(xAxis)
       .attr('transform', `translate(0, ${h})`);
       svg.append('g')
        .call(yAxis);

  // setting the svg data
  svg.selectAll('.bar')
    .data(data)
    .join('rect')
    .attr('x', (v, i) => xScale(i))
    .attr('y', yScale)
    .attr('width', xScale.bandwidth())
    .attr('height', val => h-yScale(val));



 }, [data]);

  return (
    <div style={{margin: '35px 70px 50px 90px'}} onClick={updateData}>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default NextPage