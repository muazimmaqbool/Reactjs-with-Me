import React from "react";
import { List } from "react-window";

//Its not used frequently only used when list to display is large and heavy
/*
List Virtualization:
    List virtualization, also known as windowing, is an optimization technique in React where you only render the items that are currently visible within the user's viewport, 
    plus a small buffer, instead of the entire list.
    This significantly improves performance and memory usage when dealing with large lists or tables (hundreds or thousands of items) by drastically reducing the number of DOM nodes. 

->install this dependency: npm install react-window
    then import it like this: import {List} from "react-window"

->We will create a file called 'tempData.js' which contains dummpy data that we are going to display first via 'Normal List' and then via 'Virtualization'
*/
import { products } from "./tempData"; //contains temp data

const Item = ({ item }) => {
  return (
    <div style={styles.item}>
      <p>
        <strong>{item.productName}</strong>
      </p>
      <p>{item.isAvailable}</p>
      <p>{item.price}</p>
    </div>
  );
};

function NormalList() {
  console.log("Normal List Rendered");
  return (
    <div style={styles.container}>
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

/******************************* */

const Row = React.memo(({ index, style, data }) => {
  const item = data[index];

  return (
    <div style={{ ...style, ...styles.virtualizedItem }}>
      <p>
        <strong>{item.productName}</strong>
      </p>
      <p>{item.isAvailable}</p>
      <p>{item.price}</p>
    </div>
  );
});
function VirtualizedList() {
  console.log("Virtualized list rendered");
  return (
    <List
      height={400} // Visible height
      itemCount={products?.length}
      itemSize={90} // Height of each row (px)
      width="100%"
      itemData={products}
    >
      {Row}
    </List>
  );
}
const ListVirtualization = () => {
  return (
    <div>
      {/* <h2>Normal List (1000 items)</h2>
      // <NormalList/> */}

      <h2>Virtualized List (Only visible items render)</h2>
      {/* Their is an issue with react-window library need to fix the List element */}
      <VirtualizedList/>
    </div>
  );
};
/*
->Problem with normal list:
    Renders 1000 DOM nodes
    Slow scrolling
    Re-renders are expensive
    UI lag on low-end devices
*/

const styles = {
  container: {
    height: "400px",
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "8px",
  },
  item: {
    padding: "10px",
    marginBottom: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  virtualizedItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    background: "#fff",
  },
};
/*
->WHAT IS ACTUALLY HAPPENING?
    | Normal List         | Virtualized List     |
    | ------------------- | -------------------- |
    | 1000 items rendered | ~8–12 items rendered |
    | Heavy DOM           | Light DOM            |
    | Slow scroll         | Smooth scroll        |
    | Bad UX              | Excellent UX         |


->react-window only renders what’s visible on screen
*/
export default ListVirtualization;
