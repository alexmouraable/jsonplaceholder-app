import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Post } from 'src/app/data/models/post.model';
import { Slice } from 'src/app/data/models/slice.model';
import { PostService } from 'src/app/data/services/post.service';
import { Record } from 'src/app/shared/models/record.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  sliceOfPosts: Slice<Post>;
  records: Record[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.sliceOfPosts = this.getSliceOfPosts();
    this.records = this.toRecords(this.sliceOfPosts.values);
  }

  private getSliceOfPosts(): Slice<Post> {
    return this.activatedRoute.snapshot.data.sliceOfPosts;
  }

  toRecords(posts: Post[]): Record[] {
    return posts.map(post => {
      return {
        name: post.title,
        description: post.body,
        routeView: `./${post.id}`
      }
    });
  }

  loadRecords() {
    const start: number = this.sliceOfPosts.getNextStart();
    const end: number = this.sliceOfPosts.getNextEnd();
    this.postService.getAll(start, end).pipe(take(1)).subscribe(sliceOfPosts => {
      const records = this.toRecords(sliceOfPosts.values);
      this.sliceOfPosts = sliceOfPosts;
      this.records = this.records.concat(records);
    });
  }
}
