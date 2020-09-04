import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from '../../../data/models/post.model';
import { PostService } from '../../../data/services/post.service';
import { Slice } from 'src/app/data/models/slice.model';

@Injectable({
    providedIn: "root"
})
export class PostsResolver implements Resolve<Slice<Post[]>> {

    constructor(private postService: PostService) { }

    resolve(): Observable<Slice<Post[]>> {
        return this.postService.getAll(5);
    }

}