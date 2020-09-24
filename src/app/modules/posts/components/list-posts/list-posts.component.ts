import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Post } from 'src/app/data/models/post.model';
import { Slice } from 'src/app/data/models/slice.model';
import { PostService } from 'src/app/data/services/post.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  sliceOfPosts: Slice<Post>;
  posts: Post[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.sliceOfPosts = this.activatedRoute.snapshot.data.sliceOfPosts;
    this.posts = this.sliceOfPosts.values;
  }

  loadSliceOfPosts(): void {
    const start: number = this.sliceOfPosts.getNextStart();
    const end: number = this.sliceOfPosts.getNextEnd();
    
    this.postService.getAll(start, end).pipe(take(1)).subscribe(sliceOfPosts => {
      this.sliceOfPosts = sliceOfPosts;
      this.posts = this.posts.concat(this.sliceOfPosts.values);
    });
  }
}
