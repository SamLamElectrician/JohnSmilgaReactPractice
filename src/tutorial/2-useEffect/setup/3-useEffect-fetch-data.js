import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [user, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  //if triggering rerender, make sure depencies are only at once or you risk being in a infinite loop

  return (
    <>
      <h3>Github Profile</h3>
      <ul className='users'>
        {user.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          //destructure to get data from api
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

//useEffect cannot be promise
//async await can be inside useeffect or seperate funcition
