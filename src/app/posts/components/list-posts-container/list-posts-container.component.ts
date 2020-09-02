import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Slice } from 'src/app/shared/models/slice.model';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list-posts-container',
  templateUrl: './list-posts-container.component.html',
  styleUrls: ['./list-posts-container.component.css']
})
export class ListPostsContainerComponent implements OnInit {
  sliceOfPosts: Slice<Post[]>;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.sliceOfPosts = this.getSliceOfPosts();
  }

  private getSliceOfPosts(): Slice<Post[]> {
    return this.activatedRoute.snapshot.data.sliceOfPosts;
  }

  loadSliceOfPosts(finalPosition: number): void {
    this.postService.getAll(finalPosition).pipe(take(1)).subscribe((sliceOfPosts: Slice<Post[]>) => this.sliceOfPosts = sliceOfPosts);
  }
}
