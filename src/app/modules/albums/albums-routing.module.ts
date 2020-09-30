import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAlbumsContainerComponent } from './components/list-albums-container/list-albums-container.component';
import { AlbumsResolver } from './guards/albums-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListAlbumsContainerComponent,
        resolve: {
            sliceOfAlbums: AlbumsResolver
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
export class AlbumsRoutingModule { }