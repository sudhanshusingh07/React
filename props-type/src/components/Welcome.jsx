import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for type checking

const Welcome  =(props)=>{ //receiving 'props' as a parameter
  return (
    <div>
      <h1>Welcome {props.name}</h1>{" "} {/*Displaying the 'name' property passed through props */}
    </div>
  );
}

Welcome.prototypes = {
    name: PropTypes.string.isRequired, // Defining the type of 'name' prop as string and marking it as required
}

export default Welcome