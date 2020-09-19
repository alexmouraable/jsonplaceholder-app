import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { forkJoin, Observable } from 'rxjs';

import { Post } from 'src/app/data/models/post.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { UserPostService } from 'src/app/data/services/user-post.service';
import { UserService } from 'src/app/data/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserPostsResolver implements Resolve<{user: User, sliceOfPosts: Slice<Post>}> {

    constructor(private userService: UserService, private userPostService: UserPostService) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<{user: User, sliceOfPosts: Slice<Post>}> {
        const userId: number = activatedRouteSnapshot.params.userId;
        const start: number = 0;
        const end: number = 5;
        return forkJoin({
            user: this.userService.getById(userId),
            sliceOfPosts: this.userPostService.getAll(userId, start, end)
        });
    }
    
}