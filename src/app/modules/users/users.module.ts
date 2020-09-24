import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUserPostsComponent } from './components/list-user-posts/list-user-posts.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    ListUserPostsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
