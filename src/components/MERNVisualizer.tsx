import { useState, useEffect } from "react";

const MERNVisualizer = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "M", label: "MongoDB", x: 200, y: 30 },
    { id: "E", label: "Express.js", x: 80, y: 120 },
    { id: "R", label: "React", x: 200, y: 210 },
    { id: "N", label: "Node.js", x: 320, y: 120 },
  ];

  const connections = [
    { from: "R", to: "E", delay: "" },
    { from: "R", to: "N", delay: "delay" },
    { from: "E", to: "M", delay: "delay-2" },
    { from: "N", to: "M", delay: "" },
    { from: "E", to: "N", delay: "delay" },
  ];

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="w-full flex justify-center py-8">
      <svg width="400" height="260" viewBox="0 0 400 260" className="max-w-full">
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          const isActive = hoveredNode === conn.from || hoveredNode === conn.to || hoveredNode === null;
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="hsl(168, 100%, 48%)"
              strokeWidth={hoveredNode ? (isActive ? 2 : 0.5) : 1}
              className={
                hoveredNode
                  ? isActive
                    ? "animate-pulse-line"
                    : "opacity-10"
                  : `animate-pulse-line${conn.delay ? `-${conn.delay}` : ""}`
              }
            />
          );
        })}
        {nodes.map((node) => (
          <g
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={28}
              fill="hsl(0, 0%, 11%)"
              stroke={hoveredNode === node.id ? "hsl(168, 100%, 48%)" : "hsl(0, 0%, 20%)"}
              strokeWidth={hoveredNode === node.id ? 2 : 1}
              className="transition-all duration-300"
            />
            <text
              x={node.x}
              y={node.y - 4}
              textAnchor="middle"
              fill={hoveredNode === node.id ? "hsl(168, 100%, 48%)" : "hsl(0, 0%, 91.8%)"}
              fontSize="16"
              fontFamily="Space Grotesk"
              fontWeight="500"
              className="transition-all duration-300"
            >
              {node.id}
            </text>
            <text
              x={node.x}
              y={node.y + 12}
              textAnchor="middle"
              fill="hsl(0, 0%, 39.6%)"
              fontSize="8"
              fontFamily="Inter"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default MERNVisualizer;
