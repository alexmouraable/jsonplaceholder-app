import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Post } from 'src/app/data/models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  @Input() posts: Post[];
  @Input() buttonShowMore: boolean;
  @Output() onLoadData: EventEmitter<void> = new EventEmitter<void>();

  onClickShowMore(): void {
    this.onLoadData.emit();
  }

  getRouteViewPost(postId: number): string {
    return `/postagens/${postId}`;
  }
}
