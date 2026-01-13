import React from "react";

//This simulates a large / expensive component (charts, dashboards, reports, etc.)
const HeavyFile = () => {
  console.log("Heavy component loads...");

  // simulate heavy UI
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Heavy Component</h2>
      <p>This component is loaded lazily.</p>

      <ul>
        {items.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyFile;
