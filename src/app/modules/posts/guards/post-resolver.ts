import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Post } from '../../../data/models/post.model';
import { PostService } from '../../../data/services/post.service';
import { UserService } from 'src/app/data/services/user.service';
import { User } from 'src/app/data/models/user.model';
import { PostCommentService } from 'src/app/data/services/post-comment.service';

@Injectable({
    providedIn: "root"
})
export class PostResolver implements Resolve<Post> {

    private post: Post;

    constructor(private postService: PostService, private userService: UserService, private postCommentService: PostCommentService) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Post> {
        const postId: number = activatedRouteSnapshot.params.postId;

        return this.postService.getById(postId).pipe(
            switchMap((foundPost: Post) => {
                this.post = foundPost;
                return this.userService.getById(this.post.userId).pipe(
                    switchMap((foundUser: User) => {
                        this.post.user = foundUser;
                        return this.postCommentService.getAll(this.post.id).pipe(
                            switchMap((comments: Comment[]) => {
                                this.post.comments = comments;
                                return of(this.post);
                            })
                        );
                    })
                );
            })
        );
    }

}