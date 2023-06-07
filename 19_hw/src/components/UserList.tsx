import React, { useEffect, useState } from "react";

interface IUsers {
    id:number,
    name:string,
    username: string,
    email:string,
    address:{},
    phone:string,
    website:string,
    company:{}
}

const userList:React.FC = () =>{
const[users,setUsers] = useState<IUsers[]>([]);
useEffect(()=>{
    console.log("Hello from useEffect i`m created hear where component created in page");
    
},[])
return (
    <div></div>
);
}

export default userList;