import React, { useEffect, useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //api call
  }, []);
  return (
    <div className="userCard">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h2>Loaction: Kolkata, West Bengal</h2>
      <h2>Contact: 8778688</h2>
    </div>
  );
};

export default User;
