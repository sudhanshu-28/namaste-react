import { useState } from "react";

// Functional Component
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Mumbai, India</h3>
      <h4>Contact: sudhanshurai97@gmail.com</h4>
      <h3>Count 1: {count}</h3>
      <h3>Count 2: {count2}</h3>
    </div>
  );
};

export default User;
