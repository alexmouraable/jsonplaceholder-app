import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersResolver } from './guards/users-resolver';
import { UserResolver } from './guards/user-resolver';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { UserPostsResolver } from './guards/user-posts-resolver';
import { ListUserPostsComponent } from './components/list-user-posts/list-user-posts.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListUserTodosComponent } from './components/list-user-todos/list-user-todos.component';
import { UserTodosResolver } from './guards/user-todos-resolver';
import { ListUserAlbumsComponent } from './components/list-user-albums/list-user-albums.component';
import { UserAlbumsResolver } from './guards/user-albums-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListUsersComponent,
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
    },
    {
        path: ':userId/tarefas',
        component: ListUserTodosComponent,
        resolve: {
            userAndSliceOfTodos: UserTodosResolver
        }
    },
    {
        path: ':userId/albuns',
        component: ListUserAlbumsComponent,
        resolve: {
            userAndSliceOfAlbums: UserAlbumsResolver
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