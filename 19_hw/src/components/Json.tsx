import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users";

const Counter: React.FC = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log("Create component!");

    const users1 = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

  }, );

  return (
 <></>
  );
};

export default Counter;