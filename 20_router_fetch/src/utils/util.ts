import React from "react";


export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IComment {
    id: number;
    body: string;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
}