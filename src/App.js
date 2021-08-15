import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";

// const data = [25, 40, 56, 44, 30, 20];

function App() {
  const [data, setData] = useState([10, 25, 20, 56, 12, 30, 20]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(curveCardinal);

    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join(
    //     "circle"
    //     // (enter) => enter.append("circle"),
    //     // (update) => update.attr("class", "updated")
    //   )
    //   .attr("class", "new")
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value * 2)
    //   .attr("cy", (value) => value * 2)
    //   .attr("stroke", "red");

    //wrap data in array to generate ONE single element instead of for each element
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        {/* <path d="M0, 150 100, 100 150, 120" stroke="blue" fill="none" /> */}
      </svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 30))}>
        Filter Data
      </button>
    </React.Fragment>
  );
}

export default App;
