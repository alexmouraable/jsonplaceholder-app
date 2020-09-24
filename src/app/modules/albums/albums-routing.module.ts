import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { AlbumsResolver } from './guards/albums-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListAlbumsComponent,
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