import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'postagens',
                loadChildren: './modules/posts/posts.module#PostsModule'
            },
            {
                path: 'usuarios',
                loadChildren: './modules/users/users.module#UsersModule'
            },
            {
                path: 'tarefas',
                loadChildren: './modules/todos/todos.module#TodosModule'
            },
            {
                path: 'albums',
                loadChildren: './modules/albums/albums.module#AlbumsModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }