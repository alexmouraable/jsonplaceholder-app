import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersResolver } from './guards/users-resolver';
import { UserResolver } from './guards/user-resolver';
import { ListUsersContainerComponent } from './components/list-users-container/list-users-container.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { UserPostsResolver } from './guards/user-posts-resolver';
import { ListUserPostsComponent } from './components/list-user-posts/list-user-posts.component';

const routes: Routes = [
    {
        path: '',
        component: ListUsersContainerComponent,
        resolve: {
            sliceOfUsers: UsersResolver
        }
    },
    {
        path: ':userId',
        component: ViewUserComponent,
        resolve: {
            user: UserResolver
        }
    },
    {
        path: ':userId/postagens',
        component: ListUserPostsComponent,
        resolve: {
            userAndSliceOfPosts: UserPostsResolver
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
export class UsersRoutingModule { }