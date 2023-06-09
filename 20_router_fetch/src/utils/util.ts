import { createContext } from 'react';

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

//interface IAppData описывает весь набор данных, который можно будет передавать из App в дочерние элемент
export interface IAppData {
    users: IUser[],
    comments: IComment[],
    posts: IPost[]
}
//Создаём контекст и экспортируем его 
// export const Context = createContext<IUser[]>([]);
export const AppContext = createContext<IAppData|null>(null);