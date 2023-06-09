import React, { createContext } from "react";

export interface IUser{
    id:number,
    name: string;
  };

  export const UserContext = createContext<IUser[]>([]);