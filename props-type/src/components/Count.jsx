import React, { useState, useEffect, use } from "react";
const Count = () => {
  const [count, setCount] = useState(0); // Declare a new state variable, which we'll call "count"


    useEffect(() => {
        console.log("you mount the component"); // This will run once when the component mounts
         return () => {
            console.log("you unmount the component"); // This will run when the component unmounts
         }
    }, []) // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        console.log("you update the component"); // This will run every time the component updates
    }, [count]) // Dependency array with count means this effect runs when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Count;
