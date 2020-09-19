import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Post } from 'src/app/data/models/post.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { UserPostService } from 'src/app/data/services/user-post.service';
import { Record } from 'src/app/shared/models/record.model';

@Component({
  selector: 'app-list-user-posts',
  templateUrl: './list-user-posts.component.html',
  styleUrls: ['./list-user-posts.component.css']
})
export class ListUserPostsComponent implements OnInit {
  user: User;
  sliceOfPosts: Slice<Post>;
  records: Record[];

  constructor(private activatedRoute: ActivatedRoute, private userPostService: UserPostService) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.userAndSliceOfPosts.user;
    this.sliceOfPosts = this.activatedRoute.snapshot.data.userAndSliceOfPosts.sliceOfPosts;
    this.records = this.toRecords(this.sliceOfPosts.values);
  }

  toRecords(posts: Post[]): Record[] {
    return posts.map(post => {
      return {
        name: post.title,
        description: post.body,
        routeView: `../../../postagens/${post.id}`
      }
    });
  }

  loadRecords() {
    const start: number = this.sliceOfPosts.getNextStart();
    const end: number = this.sliceOfPosts.getNextEnd();
    this.userPostService.getAll(this.user.id, start, end).pipe(take(1)).subscribe(sliceOfPosts => {
      const records = this.toRecords(sliceOfPosts.values);
      this.sliceOfPosts = sliceOfPosts;
      this.records = this.records.concat(records);
    });
  }
}
