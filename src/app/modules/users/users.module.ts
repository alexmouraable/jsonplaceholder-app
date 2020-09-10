import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUsersContainerComponent } from './components/list-users-container/list-users-container.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    ListUsersContainerComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }