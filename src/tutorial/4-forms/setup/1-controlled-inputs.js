import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//refactored in step 2
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //prevents default
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      //es6 construct for object
      //new date function to create random ids
      setPeople((people) => {
        return [...people, person];
        //spread operator keeps previous values
      });
      setEmail("");
      setFirstName("");
    } else {
      console.log("empty values");
    }
    //prevents empty strings being passed
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* value reference to variable */}
            {/* e.target.value --> gives us value of input field with onchange function */}
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* htmlFor react Specific */}
          </div>
          <button className='btn' type='submit'>
            Add Person
          </button>
          {/* You can place submit function either on button or form */}
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
