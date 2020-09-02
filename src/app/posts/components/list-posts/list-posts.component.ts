import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { Slice } from 'src/app/shared/models/slice.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  @Input('slice-of-posts') sliceOfPosts: Slice<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    console.log(this.sliceOfPosts);    
  }

  loadPosts(finalPosition: number): void {
    this.postService.getAll(finalPosition).pipe(take(1)).subscribe(sliceOfPosts => { 
      console.log(sliceOfPosts);
      this.sliceOfPosts = sliceOfPosts
    });
  }
}
