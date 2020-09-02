import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    ListPostsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
