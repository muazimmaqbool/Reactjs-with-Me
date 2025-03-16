import React from 'react'


//Read Documentation Below:
const A_ReactQuery_Info = () => {
  return (
    <div>Introduction To React Query</div>
  )
}

export default A_ReactQuery_Info

/*
->Introduction to TanStack React Query:
  TanStack React Query is a powerful data-fetching library that helps manage server-state in React applications. 
  It simplifies data fetching, caching, synchronization, and background updates, reducing the need for manual state management.

  Note: Server state refers to the data fetched from an API or a backend server. 
        This data is not yet processed or manipulated by the client-side code

->Why Use React Query?
  -Automatic Caching: Stores fetched data in cache, reducing redundant API calls.
  -Background Refetching: Keeps data fresh by refetching it automatically when needed.
  -Automatic Refetch on Focus: Refetches data when the user returns to the app.
  -Error Handling: Provides built-in mechanisms to handle API request errors.
  -Pagination & Infinite Queries: Supports pagination and infinite scrolling easily.
  -Optimistic Updates: Updates UI optimistically before the API request completes.
  -No need for useEffect: Replaces useEffect and useState for handling API calls.

->Installation:
  -To install React Query, run: npm install @tanstack/react-query
  
  -You'll also need react-query-devtools for debugging: npm install @tanstack/react-query-devtools

->Setup:
  ->Wrap your app with QueryClientProvider in index.js or App.js:
    like this: root.render(
                  <QueryClientProvider client={queryClient}>
                      <App />
                  </QueryClientProvider>
              );
    ->see index.js file
);
*/