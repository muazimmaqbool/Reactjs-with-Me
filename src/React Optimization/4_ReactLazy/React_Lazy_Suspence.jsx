import React, { lazy, Suspense, useState } from 'react'
import LazyFile from './LazyFile';

//or we can import HeavyFile via Lazy (see line number:26)
// const HeavyComponent=lazy(()=>import("./HeavyFile"))

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
          {/* here 'HeavyFile' is loaded via 'LazyFile', but we can directly use it here and use 'lazy' instead via 'LazyFile' */}
          {/* {show && <HeavyComponent/>} */}
        </Suspense>

    </div>
  )
}
/*
->What’s REALLY happening (important for interviews):
    App loads ➜ HeavyComponent NOT loaded
    User clicks button ➜ React starts loading chunk
    While loading ➜ fallback UI shows
    Chunk loaded ➜ HeavyComponent rendered

->Why this improves performance:

  ❌Without React.lazy:
      HeavyComponent bundled in main JS
      Slower initial page load

  ✅With React.lazy:
      Code split into separate chunk
      Loaded only when needed
      Faster First Contentful Paint (FCP)

->How to verify it works (must do):
    Open Chrome DevTools → Network
    Reload page
    You’ll NOT see HeavyComponent.js
    Click Load Heavy Component
    New JS chunk appears 🎯

->Interview-ready one-liner:
    React.lazy enables code-splitting by dynamically importing components, and Suspense provides a fallback UI while the component is being loaded.
*/

export default React_Lazy_Suspence