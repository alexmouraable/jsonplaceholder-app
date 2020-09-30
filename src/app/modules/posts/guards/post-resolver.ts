import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Post } from '../../../data/models/post.model';
import { PostService } from '../../../data/services/post.service';
import { UserService } from 'src/app/data/services/user.service';
import { User } from 'src/app/data/models/user.model';
import { PostCommentService } from 'src/app/data/services/post-comment.service';
import { Comment } from 'src/app/data/models/comment.model';

@Injectable({
    providedIn: "root"
})
export class PostResolver implements Resolve<Post> {

    constructor(private postService: PostService, private userService: UserService, private postCommentService: PostCommentService) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Post> {
        const postId: number = activatedRouteSnapshot.params.postId;

        return this.postService.getById(postId).pipe(
            switchMap((post: Post) => {
                return this.userService.getById(post.userId).pipe(
                    switchMap((user: User) => {
                        post.user = user;
                        return this.postCommentService.getAll(post.id).pipe(
                            switchMap((comments: Comment[]) => {
                                post.comments = comments;
                                return of(post);
                            })
                        );
                    })
                );
            })
        );
    }

}