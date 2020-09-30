import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUserPostsComponent } from './components/list-user-posts/list-user-posts.component';
import { ListUserTodosComponent } from './components/list-user-todos/list-user-todos.component';
import { ListUserAlbumsComponent } from './components/list-user-albums/list-user-albums.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    ListUserPostsComponent,
    ListUserTodosComponent,
    ListUserAlbumsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
