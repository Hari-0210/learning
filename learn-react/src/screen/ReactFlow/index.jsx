import React from "react";
import { ReactFlow, MiniMap } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

function ReactFlowComp() {
  const defaultNodes = [
    {
      id: "1",
      type: "input",
      data: { label: "Input Node" },
      position: { x: 250, y: 25 },
      style: { backgroundColor: "#6ede87", color: "white" },
    },

    {
      id: "2",
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
      style: { backgroundColor: "#ff0072", color: "white" },
    },
    {
      id: "3",
      type: "output",
      data: { label: "Output Node" },
      position: { x: 250, y: 250 },
      style: { backgroundColor: "#6865A5", color: "white" },
    },
    {
      id: "4",
      data: { label: "hari" },
      position: { x: 350, y: 350 },
      style: { backgroundColor: "#6865A5", color: "white" },
    },
  ];
  const defaultEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3", animated: true },
  ];
  const nodeColor = (node) => {
    switch (node.type) {
      case "input":
        return "#6ede87";
      case "output":
        return "#6865A5";
      default:
        return "#ff0072";
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        fitView
      >
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
      </ReactFlow>
    </div>
  );
}

export default ReactFlowComp;
