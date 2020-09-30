import { User } from './user.model';

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    user: User;
}