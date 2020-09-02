import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsResolver } from './guards/posts-resolver';
import { ListPostsContainerComponent } from './components/list-posts-container/list-posts-container.component';

const routes: Routes = [
    {
        path: '',
        component: ListPostsContainerComponent,
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