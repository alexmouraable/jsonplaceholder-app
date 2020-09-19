import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersResolver } from './guards/users-resolver';
import { UserResolver } from './guards/user-resolver';
import { ListUsersContainerComponent } from './components/list-users-container/list-users-container.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

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