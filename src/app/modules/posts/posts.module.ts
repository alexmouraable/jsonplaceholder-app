import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPostsContainerComponent } from './components/list-posts-container/list-posts-container.component';

@NgModule({
  declarations: [
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
