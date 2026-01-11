import React from 'react'

//useMemo hook is already studied in 'Hooks' folder > UseMemo.jsx
/*
React useMemo Hook:
    The React useMemo Hook returns a memoized value.
    Think of memoization as caching a value so that it does not need to be re-calculated.
    The useMemo Hook only runs when one of its dependencies are updated.
    This can improve performance.
*/
const WithUseMemo = () => {
  return (
    <div>WithUseMemo</div>
  )
}

export default WithUseMemo