import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Slice } from 'src/app/data/models/slice.model';
import { Post } from '../../../../data/models/post.model';
import { PostService } from '../../../../data/services/post.service';

@Component({
  selector: 'app-list-posts-container',
  templateUrl: './list-posts-container.component.html',
  styleUrls: ['./list-posts-container.component.css']
})
export class ListPostsContainerComponent implements OnInit {
  sliceOfPosts: Slice<Post>;
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.sliceOfPosts = this.getSliceOfPosts();
    this.posts = this.sliceOfPosts.values;
  }

  private getSliceOfPosts(): Slice<Post> {
    return this.activatedRoute.snapshot.data.sliceOfPosts;
  }

  loadSliceOfPosts(): void {
    const start: number = this.sliceOfPosts.getNextStart();
    const end: number = this.sliceOfPosts.getNextEnd();
    this.postService.getAll(start, end).pipe(take(1)).subscribe((sliceOfPosts: Slice<Post>) => {
      this.sliceOfPosts = sliceOfPosts;
      this.posts = this.posts.concat(this.sliceOfPosts.values);
      //this.sliceOfPosts.values.forEach(post => this.posts.push(post));
    });
  }
}
