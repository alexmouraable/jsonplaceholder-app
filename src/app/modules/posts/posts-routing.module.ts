import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsResolver } from './guards/posts-resolver';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostResolver } from './guards/post-resolver';
import { ListPostsContainerComponent } from './components/list-posts-container/list-posts-container.component';

const routes: Routes = [
    {
        path: '',
        component: ListPostsContainerComponent,
        resolve: {
            sliceOfPosts: PostsResolver
        }
    },
    {
        path: ':postId',
        component: ViewPostComponent,
        resolve: {
            post: PostResolver
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