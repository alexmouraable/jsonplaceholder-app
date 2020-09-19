import { Comment } from './comment.model';
import { User } from './user.model';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    user: User;
    comments: Comment[];
}