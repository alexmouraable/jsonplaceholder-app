import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostsComponent } from './posts.component';
import { PostsResolver } from './guards/posts-resolver';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        resolve: {
            sliceOfPosts: PostsResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PostsRoutingModule { }