import React from "react";

const Welcome  =(props)=>{ //receiving 'props' as a parameter
  return (
    <div>
      <h1>Welcome {props.name}</h1>{" "} {/*Displaying the 'name' property passed through props */}
    </div>
  );
}

export default Welcome