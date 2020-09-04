import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'postagens',
        loadChildren: './modules/posts/posts.module#PostsModule'
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