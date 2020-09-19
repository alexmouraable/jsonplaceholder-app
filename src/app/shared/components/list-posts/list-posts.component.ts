import { Component, Input } from '@angular/core';

import { Post } from 'src/app/data/models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  @Input() posts: Post[];
}
