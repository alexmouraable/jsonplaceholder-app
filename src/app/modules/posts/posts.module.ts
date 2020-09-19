import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

@NgModule({
  declarations: [
    ListPostsComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
