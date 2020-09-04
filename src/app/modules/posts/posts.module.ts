import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ListPostsContainerComponent } from './components/list-posts-container/list-posts-container.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListPostsComponent,
    ListPostsContainerComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
