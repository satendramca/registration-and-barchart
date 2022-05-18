import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
// import React from 'react'

const NextPage = () => {

//  const [data, setData] = useState([200, 150, 350, 100, 50, 125]);
//  const svgRef = useRef(0);

//  const getRandomInt = (max) => {
//     return Math.floor(Math.random() * max);
//   }

//  const updateData = () => {
//   console.info('====updateData=====');
//   console.info('====updateData=====', data);
//   setData([]);
//   console.info('====updateData=====', data);
//  };

//  useEffect(()=>{
//     // setting up svg container

//     const w = 400;
//     const h = 300;
//     const svg = d3.select(svgRef.current)
//       .attr('width', w)
//       .attr('height', h)
//       .style('overflow', 'visible')
//       .style('margin-top', '75px');

//   //  setting the scaling

//    const xScale = d3.scaleBand()
//     .domain(data.map((val, i) => i))
//     .range([0, w])
//     .padding(0.5);
//    const yScale = d3.scaleLinear()
//     .domain([0, h])
//     .range([h, 0]); 

//   // setting the axes
//   const xAxis = d3.axisBottom(xScale)
//     .ticks(data.lenght);
//    const yAxis = d3.axisLeft(yScale)
//      .ticks(5);
//      svg.append('g') 
//        .call(xAxis)
//        .attr('transform', `translate(0, ${h})`);
//        svg.append('g')
//         .call(yAxis);

//   // setting the svg data
//   svg.selectAll('.bar')
//     .data(data)
//     .join('rect')
//     .attr('x', (v, i) => xScale(i))
//     .attr('y', yScale)
//     .attr('width', xScale.bandwidth())
//     .attr('height', val => h-yScale(val));



//  }, [data]);

 let margin = {top: 20, right: 20, bottom: 30, left: 50},
  width = 300 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

  let x = d3.time.scale().range([0, width]);
  let y = d3.scale.linear().range([height, 0]);

  let xAxis = d3.svg.axis().scale(x).orient("bottom");
  let yAxis = d3.svg.axis().scale(y).orient("left");

  let area = d3.svg.area()
      .x(function(d) { return x(d.x); })
      .y0(height)
      .y1(function(d) { return y(d.y); });

  let svg = d3.select("div#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let data = [[1,1],[2,3],[3,2],[4,4]];

  let dataCallback = function(d) {
    d.x = +d[0];
    d.y = +d[1];
  };
  data.forEach(dataCallback);

  x.domain(d3.extent(data, function(d) { return d.x; }));
  y.domain([0, d3.max(data, function(d) { return d.y; })]);

  svg.append("path")
      .data([data])
      .attr("class", "area")
      .attr("d", area);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of Messages");

d3.select('#chart').on("click", function() {
    data.splice(0,1);
    data.push([5,5]);
    dataCallback(data[data.length - 1]);
    
    x.domain(d3.extent(data, function(d) { return d.x; }));
    y.domain([0, d3.max(data, function(d) { return d.y; })]);
    
    svg.select("g.x.axis").call(xAxis); 
    svg.selectAll("path").data([data])
        .attr("d", area);
});

  return (
    <div id='chart'/>
  )
}

export default NextPage
