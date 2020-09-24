import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Post } from 'src/app/data/models/post.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { UserPostService } from 'src/app/data/services/user-post.service';

@Component({
  selector: 'app-list-user-posts',
  templateUrl: './list-user-posts.component.html',
  styleUrls: ['./list-user-posts.component.css']
})
export class ListUserPostsComponent implements OnInit {
  user: User;
  sliceOfPosts: Slice<Post>;
  posts: Post[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userPostService: UserPostService
  ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.userAndSliceOfPosts.user;
    this.sliceOfPosts = this.activatedRoute.snapshot.data.userAndSliceOfPosts.sliceOfPosts;
    this.posts = this.sliceOfPosts.values;
  }

  loadSliceOfPosts(): void {
    const start: number = this.sliceOfPosts.getNextStart();
    const end: number = this.sliceOfPosts.getNextEnd();
    
    this.userPostService.getAll(this.user.id, start, end).pipe(take(1)).subscribe(sliceOfPosts => {
      this.sliceOfPosts = sliceOfPosts;
      this.posts = this.posts.concat(this.sliceOfPosts.values);
    });
  }

  getLinkViewPost(idPost: number): string {
    return `../../../postagens/${idPost}`;
  }
}
