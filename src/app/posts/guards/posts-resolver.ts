import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Slice } from 'src/app/shared/models/slice.model';

@Injectable({
    providedIn: "root"
})
export class PostsResolver implements Resolve<Slice<Post[]>> {

    constructor(private postService: PostService) { }

    resolve(): Observable<Slice<Post[]>> {
        return this.postService.getAll(5);
    }

}