import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
    //checks current width of window
  };

  useEffect(() => {
    console.log("hello 1");
    window.addEventListener("resize", checkSize);
    //window has event listener of resizing and calls check size function whenever resized
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
      //cleanup function good for component appearing/disappearing
    };
  });

  //each time window is resized, event listener is added, mighjt cause memory leak

  return (
    <>
      <h1>window </h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
