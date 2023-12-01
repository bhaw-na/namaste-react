import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("API calls here");
  });

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h3>Location: Bhilai</h3>
      <h4>Contact: @bhawpan</h4>
    </div>
  );
};

export default User;
