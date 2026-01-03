import React from 'react'

//useCallback hook is already studied in 'Hooks' folder > UseCallback.jsx
/*
The useCallback Hook returns a memoized callback function
This allows us to isolate resources of intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.

->The useCallback and useMemo Hooks are almost similar, the main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
*/
const WithUseCallback = () => {
  return (
    <div>WithUseCallback</div>
  )
}

export default WithUseCallback