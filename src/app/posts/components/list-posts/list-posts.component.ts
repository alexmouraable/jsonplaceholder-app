import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../models/post.model';
import { Slice } from 'src/app/shared/models/slice.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  @Input('slice-of-posts') sliceOfPosts: Slice<Post[]>;
  @Output('load-slice-of-posts') loadSliceOfPosts: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  loadPosts(): void {
    this.loadSliceOfPosts.emit(this.sliceOfPosts.nextFinalPosition);
  }

  haveMorePosts(): boolean {
    return this.sliceOfPosts.totalValues < this.sliceOfPosts.totalCount;
  }
}
