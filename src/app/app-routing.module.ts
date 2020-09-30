import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/usuarios',
        pathMatch: 'full'
    },
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
                path: 'albuns',
                loadChildren: './modules/albums/albums.module#AlbumsModule'
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
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