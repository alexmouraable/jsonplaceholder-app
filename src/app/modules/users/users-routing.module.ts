import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersResolver } from './guards/users-resolver';
import { ListUsersContainerComponent } from './components/list-users-container/list-users-container.component';

const routes: Routes = [
    {
        path: '',
        component: ListUsersContainerComponent,
        resolve: {
            sliceOfUsers: UsersResolver
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