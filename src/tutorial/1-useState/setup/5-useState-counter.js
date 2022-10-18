import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      //above --> only calls one click
      setValue((prevState) => {
        //calls per click not just once
        //undefined will cause issue
        return prevState + 1;
      });
    }, 2000);
    //time out calls 2 values, callback function plus time delay
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h1>{value}</h1>
        {/* inline plus ref to function */}
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        {/* refernce to reset value */}
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        {/* inline plus ref to function */}
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
