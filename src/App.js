import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

// const data = [25, 40, 56, 44, 30, 20];

function App() {
  const [data, setData] = useState([25, 20, 56, 12, 30, 20]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .selectAll("circle")
      .data(data)
      .join(
        "circle"
        // (enter) => enter.append("circle"),
        // (update) => update.attr("class", "updated")
      )
      .attr("class", "new")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
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
