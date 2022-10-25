import React, { useEffect, useRef } from "react";

// preserves value between renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  //object with property of current:
  //default is null
  //used to target dom nodes/ elements

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    // this is how you access the ref value
    // console.log(refContainer.current);
    //returns html
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    //focus on html ref
  }); //wont trigger rerender so no worries about dependeecies
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          {/* no onChange value */}
          {/* uses ref attribute, can be on any elements */}
          <button type='submit'> submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
