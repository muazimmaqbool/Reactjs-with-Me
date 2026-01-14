import React, { Suspense, useState } from 'react'
import LazyFile from './LazyFile';

//Benefits: Loads code only when needed → faster initial load.

//Here i have two more file in this folder i.e HeavyFile.jsx and LazyFile.jsx

//HeavyFile.jsx : This simulates a large / expensive component (charts, dashboards, reports, etc.)
//LazyFile.jsx : Here we lazy-load the heavy component.

//Suspense handles the loading state.

const React_Lazy_Suspence = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
        <h2>Optimization with React Lazy and Suspence:</h2>

        <button onClick={()=>setshow(true)}>Load Heavy Component</button>

        <Suspense fallback={<p>Loading...</p>}>
          {show && <LazyFile/>}
          {/*  */}
        </Suspense>

    </div>
  )
}

export default React_Lazy_Suspence