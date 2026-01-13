import React, { lazy } from 'react'

//Here we lazy-load the heavy component.
//This file itself stays lightweight. The heavy code is NOT loaded initially.

//loading HeavyFile via lazy keyword
const HeavyComponent=lazy(()=>import("./HeavyFile"))
const LazyFile = () => {
  return <HeavyComponent/>
}

export default LazyFile