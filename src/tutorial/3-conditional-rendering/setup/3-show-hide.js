import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
      {/* show is truthy, Item would be returned, if falsy, nothing would be returned  */}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  //state of window size

  const checkSize = () => {
    setSize(window.innerWidth);
    //set size changes size attribute via setSize Function
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    //calls function set size everytime resized
    console.log("addEvent");
    return () => {
      //clean up function
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Window</h1>
      <h2>Size:{size}</h2>
    </div>
  );
};

//needs clean up function when we set up side effect eg: event listener ojn windwo
export default ShowHide;
