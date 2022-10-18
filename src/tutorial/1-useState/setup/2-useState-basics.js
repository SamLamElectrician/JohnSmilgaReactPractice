import React, { useState } from "react";

//component name has to be in uppercase for hooks
//hook has to be in function body
//cannot be called conditionally
const UseStateBasics = () => {
  // console.log(useState())
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  //state value, function\
  //function convention is setVariable
  //use state will be default value
  //const [variable to be changed, function to be called] = useState('default value')
  // ^ destructuring
  const handleClick = () => {
    if (text === "random title") {
      setText("hello workld");
    } else {
      setText("random title");
    }
    //changes text to this
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//useState a named function
//useState returns an array
//needs a param to be passed through
//use state can be assigned to variable
//handler will be function for state
