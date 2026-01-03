import React, { useState } from "react";
/*
React Optimization – Introduction
 
 Optimization in React means:
    - Reducing unnecessary re-renders
    - Improving performance for large apps
    - Loading only what the user needs

 IMPORTANT:
    - Do not optimize everything by default
    - First make it work
    - Then make it fast
 */
const ReactOptimizationIntro = () => {
  console.log("you rendered me"); //logged withn count changes and when component mounts
  const [count, setcount] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h1>React Optimization – Introduction</h1>

      <p>React is already fast. Most performance problems happen because of:</p>
      <ul>
        <li>Unnecessary re-renders</li>
        <li>Poor state design</li>
        <li>Heavy calculations inside render</li>
        <li>Large lists without virtualization</li>
        <li>Loading everything at once</li>
      </ul>

      <h2>When should you optimize?</h2>
      <ul>
        <li>UI feels slow or laggy</li>
        <li>Large tables or lists</li>
        <li>Frequent state updates</li>
        <li>Dashboard / Admin panels</li>
      </ul>

      <h2>What you will learn in this folder</h2>
      <ul>
        <li>React.memo – prevent useless re-renders</li>
        <li>useCallback – stable function references</li>
        <li>useMemo – optimize heavy calculations</li>
        <li>Code splitting & lazy loading</li>
        <li>List virtualization</li>
        <li>Better state design</li>
        <li>Debugging re-renders</li>
      </ul>

      <h2>Golden Rules</h2>
      <ol>
        <li>Measure first (React DevTools)</li>
        <li>Optimize only real problems</li>
        <li>Readable code &gt; premature optimization</li>
      </ol>

      <button onClick={() => setcount(count + 1)}>
        Re-render Intro ({count})
      </button>

      <p style={{ marginTop: 10, fontStyle: "italic" }}>
        Open React DevTools and watch this component re-render. Optimization
        starts with observation.
      </p>
    </div>
  );
};

export default ReactOptimizationIntro;
