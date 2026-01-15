import React from 'react'

//Its not used frequently only used when list to display is large and heavy
/*
List Virtualization:
    List virtualization, also known as windowing, is an optimization technique in React where you only render the items that are currently visible within the user's viewport, 
    plus a small buffer, instead of the entire list.
    This significantly improves performance and memory usage when dealing with large lists or tables (hundreds or thousands of items) by drastically reducing the number of DOM nodes. 
*/
const Virtualization = () => {
  return (
    <div>Virtualization</div>
  )
}

export default Virtualization